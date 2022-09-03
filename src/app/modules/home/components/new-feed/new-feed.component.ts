import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-new-feed",
  templateUrl: "new-feed.component.html",
  styleUrls: ["new-feed.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewFeedComponent {
  modalOpen = false;

  maxCharacters = 5000;

  currentCharacters = 0;

  valid = false;

  onKeyDown(characters: number) {
    this.currentCharacters = characters;

    this.valid = this.currentCharacters <= this.maxCharacters && this.currentCharacters > 0;
  }

  onOpenModal() {
    this.modalOpen = true;
  }

  onCloseModal() {
    this.modalOpen = false;
  }

  onSubmit() {
    console.error("@TODO Submit");
  }
}
