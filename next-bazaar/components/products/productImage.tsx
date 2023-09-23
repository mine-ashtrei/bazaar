import { Box, Stack } from "@mui/material";
import { ImageT } from "../../lib/products";
import Image from "next/image";

const ProductImage = ({ images }: { images: ImageT[] }) => {
  images = Array(5).fill(images[0]);
  return (
    <Box
      sx={{
        width: "450px",
      }}
    >
      <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          src={images[0].url}
          width={400}
          height={400}
          alt={images[0].alt}
        />
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.url}
                width={60}
                height={60}
                alt={image.alt}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductImage;
