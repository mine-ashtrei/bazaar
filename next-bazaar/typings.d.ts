import { User as OriginalUser } from "next-auth";

declare module "next-auth" {
  export interface User extends OriginalUser {
    accessToken?: string;
    role?: string;
  }
}

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    desert?: PaletteColor;
    vegetation?: PaletteColor;
    life?: PaletteColor;
    desertDark?: PaletteColor;
  }

  interface PaletteOptions {
    desert?: PaletteColorOptions;
    vegetation?: PaletteColorOptions;
    life?: PaletteColorOptions;
    desertDark?: PaletteColorOptions;
  }
}
