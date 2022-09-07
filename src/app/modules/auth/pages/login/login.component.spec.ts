import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { LoginComponent } from "./login.component";
import { httpTranslateLoader } from "../../../../app.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { SharedModule } from "../../../shared/shared.module";
import { LoginService } from "../../services/login.service";
import { By } from "@angular/platform-browser";

describe("Login form", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore(), LoginService],
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        SharedModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient],
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("login form should be valid", () => {
    component.form.setValue({
      email: "tomas.svojanovsky11@gmail.com",
      password: "123456789",
    });

    expect(component.form.valid).toBeTruthy();
  });

  test("user should be logged in", fakeAsync(() => {
    const formData = {
      email: "tomas.svojanovsky11@gmail.com",
      password: "123456789",
    };
    jest.spyOn(component, "onSubmit");

    component.form.setValue(formData);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css("form"));
    form.triggerEventHandler("ngSubmit", null);
    tick();

    expect(component.onSubmit).toHaveBeenCalledWith({
      email: "tomas.svojanovsky11@gmail.com",
      password: "123456789",
    });
  }));

  test("login form button should be disabled by default", () => {});
});
