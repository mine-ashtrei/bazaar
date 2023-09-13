import { User as OriginalUser } from "next-auth";

declare module "next-auth" {
  export interface User extends OriginalUser {
    accessToken?: string;
    role?: string;
  }
}
