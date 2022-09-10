import { ChangeDetectionStrategy, Component, Input, OnDestroy } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { filter, map, Subject, takeUntil, tap } from "rxjs";

export type Url = {
  path: string;
  label: string;
  clazz: string;
};

@Component({
  selector: "app-navigation-item",
  templateUrl: "navigation-item.component.html",
  styleUrls: ["navigation-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent implements OnDestroy {
  @Input() url?: Url;

  destroy = new Subject<boolean>();

  active = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        map((event) => event as NavigationStart),
        tap((event: NavigationStart) => {
          this.active = event.url.includes(this.url?.path || "");
          console.log(this.active);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
