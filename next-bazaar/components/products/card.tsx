import Image from "next/image";
import Link from "next/link";
import { Product } from "../../lib/api/products";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";

export default function ProductCard({ item }: { item: Product }) {
  const theme = useTheme();
  return (
    <Link href="#" passHref>
      <Paper>
        <Stack>
          <Image
            src={item.images[0].url}
            width={304}
            height={200}
            alt={item.images[0].alt}
          />
          <Box
            sx={{
              padding: 1,
              backgroundColor: theme.palette.info_secondary.main,
            }}
          >
            <Stack>
              <Typography variant="h5">{item.name}</Typography>
              <Typography>ج. م{item.msrpPrice}/للقطعة</Typography>
            </Stack>
          </Box>
          {item.supplierName && (
            <Typography sx={{ padding: 1 }} variant="body2">
              {item.supplierName}
            </Typography>
          )}
        </Stack>
      </Paper>
    </Link>
  );
}
