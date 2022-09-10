import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-crypto",
  styleUrls: ["crypto.component.scss"],
  templateUrl: "crypto.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
