import Image from "next/image";
import Link from "next/link";
import { Supplier } from "../../lib/api/suppliers";
import {
  Card,
  Chip,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

export default function SupplierCard({ item }: { item: Supplier }) {
  // TODO: make the ratings absolute so text will not be on two rows
  return (
    <Link href="#" passHref>
      <Paper
        sx={{
          padding: 1.5,
          flexGrow: 1,
        }}
        elevation={1}
      >
        <Stack spacing={1}>
          <Image src={item.imgUrl} width={370} height={200} alt={item.name} />
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">{item.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>مصر</Typography>
            </Grid>
            <Grid item>
              <Rating precision={0.5} readOnly value={item.rating} />
            </Grid>
          </Grid>
          <Stack direction="row" spacing={1}>
            {item.categories.map((category, index) => (
              <Chip variant="outlined" key={category} label={category} />
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Link>
  );
}
