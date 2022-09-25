import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-observables",
  styleUrls: ["observables.component.scss"],
  templateUrl: "observables.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesComponent implements AfterViewInit {
  @ViewChild('btn') button!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, "click")
      .subscribe(() => {
        console.log("I clicked on the button");
      });
  }
}
