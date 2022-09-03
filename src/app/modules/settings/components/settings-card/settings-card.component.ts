import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-settings-card",
  templateUrl: "settings-card.component.html",
  styleUrls: ["settings-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsCardComponent {
  @Input() label = "";

  @Input() description = "";

  @Input() icon = "";

  @Input() url = "";
}
