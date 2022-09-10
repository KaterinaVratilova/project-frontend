import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-money-node",
  templateUrl: "money-node.component.html",
  styleUrls: ["money-node.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyNodeComponent {
  @Input() label = "";
}
