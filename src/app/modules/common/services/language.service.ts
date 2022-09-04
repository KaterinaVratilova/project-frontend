import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum LANGUAGES {
  CZECH = "cs",
  ENGLISH = "en",
}

const TEMPORARY_LANGUAGE_KEY = "tempLang";

@Injectable({ providedIn: "root" })
export class LanguageService {
  private _language = new BehaviorSubject<string>(sessionStorage.getItem(TEMPORARY_LANGUAGE_KEY) || LANGUAGES.ENGLISH);

  saveTemp(lang: string) {
    sessionStorage.setItem(TEMPORARY_LANGUAGE_KEY, lang);
    this._language.next(lang);
  }

  getTemp() {
    return this._language.asObservable();
  }
}
