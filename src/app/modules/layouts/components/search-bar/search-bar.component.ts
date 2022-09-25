import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from
    "@angular/core";
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil, tap } from "rxjs";

import { AssetsService } from "../../../assets/services/assets.service";

@Component({
  selector: "app-search-bar",
  styleUrls: ["search-bar.component.scss"],
  templateUrl: "search-bar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit, OnDestroy {

  private searchSubject = new Subject<string>();

  private unsrubscribe = new Subject();

  assets?: any[];

  constructor(private assetsService: AssetsService, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.searchSubject.asObservable()
      .pipe(
        takeUntil(this.unsrubscribe),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((search) => {
          return this.assetsService.get(search);
        }),
        tap((assets: any) => {
          this.assets = assets.content;
          this.cd.markForCheck();
        }),
      ).subscribe();
  }

  onSearch(search: string) {
    this.searchSubject.next(search);
  }

  ngOnDestroy(): void {
    this.unsrubscribe.next(null);
    this.unsrubscribe.complete();
  }
}
