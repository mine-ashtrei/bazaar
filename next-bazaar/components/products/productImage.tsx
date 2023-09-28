import { Box, Stack } from "@mui/material";
import { ImageT } from "../../lib/api/products";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ images }: { images: ImageT[] }) => {
  const newImages = Array(5).fill(images[0]);
  newImages[1] = images[1];

  const [curretnImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Box
      sx={{
        width: "450px",
      }}
    >
      <Stack spacing={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          src={newImages[curretnImageIndex].url}
          width={400}
          height={400}
          alt={newImages[curretnImageIndex].alt}
        />
        <Stack direction={"row"} spacing={1} justifyContent={"center"}>
          {newImages.map((image, index) => {
            if (curretnImageIndex == index) {
              return null;
            }
            return (
              <Image
                key={index}
                src={image.url}
                width={60}
                height={60}
                alt={image.alt}
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductImage;
