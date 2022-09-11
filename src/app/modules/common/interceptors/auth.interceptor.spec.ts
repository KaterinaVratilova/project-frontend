import { isSkipUrl } from "./auth.interceptor";

describe("Auth interceptor", () => {
  test("url should be skipped", () => {
    let found = isSkipUrl("http://localhost:8080/api/v1/auth");
    expect(found).toBeTruthy();

    found = isSkipUrl("http://localhost:8080/api/v1/user");
    expect(found).toBeTruthy();

    found = isSkipUrl("http://localhost:8080/api/v1/auth/user");
    expect(found).toBeFalsy();

    found = isSkipUrl("http://localhost:8080/api/v1/user/123/watchlist");
    expect(found).toBeFalsy();
  });
});
