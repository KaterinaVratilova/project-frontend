import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";
import { Component } from "@angular/core";

@Component({
  template: "<app-button>Submit</app-button>",
})
class ButtonTemplate {}

describe("Button component", () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonComponent: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent, ButtonTemplate],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        buttonComponent = fixture.componentInstance;
      });
  });

  test("should render the button", () => {
    expect(buttonComponent).toBeTruthy();
  });

  test("should contain submit", () => {
    const fixture = TestBed.createComponent(ButtonTemplate);
    fixture.detectChanges();

    const submitText = fixture.debugElement.nativeElement.querySelector("button").innerHTML;
    expect(submitText).toBe("Submit");
  });

  test("should response on click event", fakeAsync(() => {
    jest.spyOn(buttonComponent, "onClick");

    const button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    tick();

    expect(buttonComponent.onClick).toHaveBeenCalled();
  }));

  test("rounded should be normal by default", () => {
    const button = fixture.debugElement.nativeElement.querySelector("button");

    expect(button.classList.contains("btn-rounded-light")).toBeFalsy();
  });

  test("rounded should be light", () => {
    const button = fixture.debugElement.nativeElement.querySelector("button");
    buttonComponent.rounded = "light";
    fixture.detectChanges();

    expect(button.classList.contains("btn-rounded-light")).toBeTruthy();
  });
});
