import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-stocks",
  styleUrls: ["stocks.component.scss"],
  templateUrl: "stocks.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent {
  instruments = [
    {
      img: "assets/images/cards/vz_2C2C2C_F7F7F7.svg",
      data: {
        name: "Verizon",
        ticker: "VZ",
        price: 44.11,
        movement: "0.61%",
      },
    },
    {
      img: "assets/images/cards/att_00A8E0_F7F7F7.svg",
      data: {
        name: "AT&T Inc",
        ticker: "T",
        price: 18.09,
        movement: "-0.17%",
      },
    },
    {
      img: "assets/images/cards/intc_0068B5_F7F7F7.svg",
      data: {
        name: "Intel",
        ticker: "INTC",
        price: 34.06,
        movement: "0.65%",
      },
    },
  ];
}
