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
    info_primary?: PaletteColor;
    info_secondary?: PaletteColor;
    info_ternary?: PaletteColor;
    background_secondary?: PaletteColor;
  }

  interface PaletteOptions {
    info_primary?: PaletteColorOptions;
    info_secondary?: PaletteColorOptions;
    info_ternary?: PaletteColorOptions;
    background_secondary?: PaletteColorOptions;
  }
}
