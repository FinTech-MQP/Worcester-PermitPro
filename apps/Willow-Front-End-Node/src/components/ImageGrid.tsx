import { useState } from "react";
import { Box, Grid, Button, Modal, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { WILLOW_COLOR } from "../utils/constants";

const styles = {
  gridPseudo: {
    height: "100%",
    overflowY: "auto",
  },
  mainGrid: {
    width: "100%",
    height: "fit-content",
  },
  mainImage: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
    cursor: "pointer",
  },
  secondaryGrid: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  secondaryImages: {
    width: "100%",
    height: "140px",
    cursor: "pointer",
  },
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    maxHeight: "80vh",
    width: "80vw",
    cursor: "pointer",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

interface ImageGridProps {
  images: string[] | null;
}

export const WillowButton_Images = styled(Button)({
  width: "100%",
  height: "140px",
  display: "block",
  boxSizing: "border-box",
  borderRadius: 0,
  color: WILLOW_COLOR,
  backgroundColor: "#eee",
  "&:hover": {
    backgroundColor: "#ccc",
  },
  "& .MuiTouchRipple-root": {
    color: WILLOW_COLOR,
  },
});

const ImageGrid = ({ images }: ImageGridProps) => {
  const [showFullGrid, setShowFullGrid] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  if (!images || images.length === 0) return null;

  const mainImage = images[0];
  const sideImages = images.slice(1, 3);

  const handleImageClick = (image: string) => {
    setExpandedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setExpandedImage(null);
  };

  return (
    <Box sx={styles.gridPseudo}>
      {showFullGrid ? (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <WillowButton_Images onClick={() => setShowFullGrid(false)}>
              See Less
            </WillowButton_Images>
          </Grid>
          {images.map((image, index) => (
            <Grid
              item
              key={index}
              xs={4}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} style={styles.secondaryImages} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={styles.mainGrid}>
          <img
            src={mainImage}
            style={styles.mainImage}
            onClick={() => handleImageClick(mainImage)}
          />
          <Grid container spacing={2}>
            {sideImages.map((image, index) => (
              <Grid item key={index} xs={4}>
                <img
                  src={image}
                  style={styles.secondaryImages}
                  onClick={() => handleImageClick(image)}
                />
              </Grid>
            ))}
            <Grid item xs={4}>
              <WillowButton_Images onClick={() => setShowFullGrid(true)}>
                See More
              </WillowButton_Images>
            </Grid>
          </Grid>
        </Box>
      )}
      <Modal open={showModal} onClose={closeModal} onClick={closeModal}>
        <Box sx={styles.container}>
          <img
            src={expandedImage || ""}
            alt="Expanded View"
            style={styles.content}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageGrid;