import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { delay, exhaustMap, fromEvent, map, mergeAll, mergeMap, Observable, Subject, switchMap } from "rxjs";

import { MockUserService } from "../../services/mock-user.service";
import { User } from "../../../auth/types";

@Component({
  selector: "app-observables",
  styleUrls: ["observables.component.scss"],
  templateUrl: "observables.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesComponent implements AfterViewInit {
  @ViewChild("btn") button!: ElementRef<HTMLButtonElement>;

  // mergeMap, concatMap, switchMap, exhaustMap

  constructor(private mockUserService: MockUserService) {}

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, "click")
      .pipe(exhaustMap(() => this.mockUserService.get()))
      .subscribe((data) => {
        console.log("I clicked on the button", data);
      });
  }
}
