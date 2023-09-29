import { useCallback, useState } from "react";
import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { UseFormReturn, set } from "react-hook-form";
import { NewProductFormData } from ".";
import Image from "next/image";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { MouseEvent } from "react";
import { useDropzone } from "react-dropzone";

export default function ProductListingMediaGroup({
  useFormVar,
}: {
  useFormVar: UseFormReturn<NewProductFormData>;
}) {
  const theme = useTheme();
  const [images, setImages] = useState<File[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      // const formData = new FormData();
      // acceptedFiles.forEach((file) => {
      //     formData.append("file", file);
      // });

      // try {
      //     const response = await fetch("http://localhost:8080/api/images", {
      //         method: "POST",
      //         body: formData,
      //     });

      //     if (response.ok) {
      //         const data = await response.json();
      //         // do something with the response data
      //     } else {
      //         throw new Error("Failed to upload image");
      //     }
      // } catch (error) {
      //     console.error(error);
      // }

      setImages([...images, ...acceptedFiles]);
    },
    [images]
  );

  const removeImage = (e: MouseEvent<HTMLButtonElement>, image: File) => {
    e.preventDefault();
    setImages(images.filter((i) => i !== image));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 2,
    onDrop: onDrop,
  });

  return (
    <>
      <Grid item xs={12}>
        <Box
          {...getRootProps()}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
            border: "2px dashed grey",
            borderRadius: "10px",
            padding: "20px",
            cursor: "pointer",
            "&:hover": {
              borderColor: theme.palette.secondary.dark,
            },
          }}
        >
          <input {...getInputProps()} accept=".png,.jpg" />
          <Typography variant="body2">
            Drop your images here, or{" "}
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.dark, display: "inline" }}
            >
              click to browse
            </Typography>
          </Typography>
        </Box>
      </Grid>
      <Grid item spacing={2} xs={12}>
        <Stack spacing={2}>
          {images.map((image, index) => (
            <Stack
              key={index}
              direction={"row"}
              justifyContent={"space-between"}
              spacing={2}
            >
              <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Image
                  alt="uploaded image"
                  src={URL.createObjectURL(image)}
                  width={128}
                  height={128}
                />
                <Typography variant="body2">{image.name}</Typography>
              </Stack>
              <Button onClick={(e) => removeImage(e, image)}>
                <DeleteIcon />
              </Button>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </>
  );
}
