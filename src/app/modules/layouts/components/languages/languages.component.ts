import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesComponent {}
