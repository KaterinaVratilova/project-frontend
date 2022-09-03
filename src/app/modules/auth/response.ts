import { User } from "./types";

export type LoginResponse = {
  jwtToken: string;
  refreshToken: string;
  user: User;
};
