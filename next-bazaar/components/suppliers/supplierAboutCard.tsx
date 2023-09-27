import { Box, Rating, Stack, Typography } from "@mui/material";
import { Supplier } from "../../lib/suppliers";

const ContactLabel = ({ label, value }: { label: string; value: string }) => {
  return (
    <Stack alignItems={"center"} spacing={1}>
      <Typography fontWeight="700" variant="h5">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};

const SupplierAboutCard = ({ supplier }: { supplier: Supplier }) => {
  return (
    <Stack spacing={3}>
      <Typography variant="h3">{supplier.name}</Typography>
      <Typography variant="h6">{supplier.about}</Typography>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Rating precision={0.5} readOnly value={supplier.rating} />
        {supplier.rating}
      </Stack>
      <ContactLabel label="Email" value={supplier.email} />

      {supplier.instagram && (
        <ContactLabel label="Instagram" value={supplier.instagram} />
      )}
      {supplier.facebook && (
        <ContactLabel label="Facebook" value={supplier.facebook} />
      )}
      <ContactLabel label="Enstablished" value={supplier.enstablished} />
    </Stack>
  );
};

export default SupplierAboutCard;
