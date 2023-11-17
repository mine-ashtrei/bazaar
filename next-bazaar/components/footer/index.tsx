import Image from "next/image";
import NextLink from "next/link";
import { Link as MuiLink, Stack, SvgIcon, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import InstagramSvg from "../common/icons/instagram";
import FacebookSvg from "../common/icons/facebook";

export default function Footer() {
  const theme = useTheme();
  const textColor = "white";
  return (
    <Box
      component="footer"
      sx={{
        paddingX: 6,
        paddingY: 4,
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        left: 0,
        // position: "absolute",
        // width: "100%",
      }}
    >
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={3}>
          <Image width={171} height={87} src="/logo-lg-white.svg" alt="Logo" />
          <Typography variant="body2" color={textColor} sx={{ mt: 4 }}>
            &copy; كل الحقوق محفوظة 2023 Ashtrei.com
          </Typography>
        </Grid>

        {/* Second Column Follow Us */}
        <Grid item xs={3}>
          <Typography variant="h6" color={textColor}>
            تواصل معنا
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <InstagramSvg stroke="white" fill="black" />
            <FacebookSvg stroke="white" />
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
              color={textColor}
            >
              من نحن
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              مركز المساعده
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              الدعم
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              الاخبار
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              المدونه
            </MuiLink>
          </Stack>
        </Grid>

        {/* Fourth Column Legal*/}
        <Grid item xs={3}>
          <Stack>
            <Typography color={textColor} variant="h6">
              الشروط والأحكام
            </Typography>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              شروط الاستخدام
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              سياسة الخصوصية
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              تراخيص
            </MuiLink>
            <MuiLink
              color={textColor}
              component={NextLink}
              href="/"
              underline="hover"
            >
              ملفات تعريف الارتباط
            </MuiLink>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
