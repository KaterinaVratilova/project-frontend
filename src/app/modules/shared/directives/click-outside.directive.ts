import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({ selector: "[clickOutside]" })
export class ClickOutsideDirective {
  @HostListener("document:click", ["$event", "$event.path"])
  public onGlobalClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}
}
