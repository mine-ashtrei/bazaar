import Image from "next/image";
import NextLink from "next/link";
import { Link as MuiLink, Stack, Toolbar, useTheme } from "@mui/material";
import IconButton from "../common/buttons/iconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.desert.main,
        bottom: 0,
        left: 0,
      }}
    >
      <Grid container spacing={2} sx={{ paddingY: 2, paddingX: 4 }}>
        {/* First Column */}
        <Grid item xs={3}>
          <Image
            width={171}
            height={87}
            src="/logo-lg-secondary.svg"
            alt="Logo"
          />
          <Typography variant="body2" sx={{ mt: 4 }}>
            &copy; كل الحقوق محفوظة 2023 Ashtrei.com
          </Typography>
        </Grid>

        {/* Second Column Follow Us */}
        <Grid item xs={3}>
          <Typography variant="h6">تواصل معنا</Typography>
          <Stack direction={"row"} spacing={1}>
            <IconButton src="/icons/social/facebook.svg" href="/" />
            <IconButton src="/icons/social/instagram.svg" href="/" />
          </Stack>
        </Grid>

        {/* Third Column About Us*/}
        <Grid item xs={3}>
          <Stack>
            <MuiLink
              component={NextLink}
              href="/about"
              underline="hover"
              variant="h6"
            >
              من نحن
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              مركز المساعده
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              الدعم
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              الاخبار
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              المدونه
            </MuiLink>
          </Stack>
        </Grid>

        {/* Fourth Column Legal*/}
        <Grid item xs={3}>
          <Stack>
            <Typography variant="h6">الشروط والأحكام</Typography>
            <MuiLink component={NextLink} href="/" underline="hover">
              شروط الاستخدام
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              سياسة الخصوصية
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              تراخيص
            </MuiLink>
            <MuiLink component={NextLink} href="/" underline="hover">
              ملفات تعريف الارتباط
            </MuiLink>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
