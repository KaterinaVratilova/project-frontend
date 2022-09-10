import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

type Instrument = {
  name: string;
  ticker: string;
  price: number;
  movement: string;
};

@Component({
  selector: "app-instrument-card",
  styleUrls: ["instrument-card.component.scss"],
  templateUrl: "instrument-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentCardComponent {
  @Input() img = "";

  @Input() instrument?: Instrument;

  get backgroundColor() {
    const color = this.img.split("_")[1];
    return "#" + color || "";
  }
}
