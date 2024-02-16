// ChatModal.js
import React from "react";
import {
  Modal,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  IconButton,
  InputAdornment,
  CardActionArea,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  color: "#FF4DAE",
  borderRadius: 5,
  background: "white", // This is a dark theme background
  width: "95%",
  height: "75%",
  paddingRight: "180px",
  paddingLeft: "180px",
  paddingTop: "115px",
  paddingBottom: "50px",
  overflowY: "auto", // In case content is larger than the screen
};

const ChatModal = ({ isOpen, onClose }) => {
  const handleCardClick = (event) => {
    // Implement your logic here, e.g., navigate or open a new modal
    console.log("Card clicked", event.currentTarget);
  };

  const handleSendClick = () => {
    // Implement your send message logic here
    console.log("Send button clicked");
  };

  const cardData = [
    {
      id: 1,
      text: "Consejos para una carta de presentación",
      icon: InfoOutlinedIcon,
    },
    { id: 2, text: "Ideas para nombres de productos", icon: InfoOutlinedIcon },
    { id: 3, text: "Ideas para nombres de productos", icon: InfoOutlinedIcon },
    { id: 4, text: "Ideas para nombres de productos", icon: InfoOutlinedIcon },
    // ... Add other card data
  ];
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title">
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: "#FF4DAE", position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ fontSize: "56px", fontWeight: "bold" }}
        >
          Hi, I am AxoAI.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mb: 4, fontSize: "56px", color: "#DEDEDE", fontWeight: "bold"}}
        >
          How can I help you?
        </Typography>
        <Grid container spacing={2}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} lg={3} key={card.id}>
              <Card
                sx={{
                  bgcolor: "#FFADD3",
                  borderRadius: "15px",
                  height: "150px",
                }}
              >
                <CardActionArea
                  onClick={() => handleCardClick(card.id)}
                  sx={{ height: "100%" }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      component="div"
                      color="white"
                      sx={{ textAlign: "center" }}
                    >
                      {card.text}
                    </Typography>
                    {React.createElement(card.icon, {
                      sx: {
                        position: "absolute",
                        bottom: 8,
                        right: 8,
                        color: "white",
                      },
                    })}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ position: "absolute", bottom: 50, left: 180, right: 180 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write here your question"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSendClick} sx={{ color: "#FFADD3" }}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                bgcolor: "rgba(255, 255, 255, 0.09)",
                border: "2px solid #FFADD3",
                borderRadius: 100,
                paddingLeft: "20px",
                color: "#9C9C9C",
                '& .MuiOutlinedInput-input': {
                  p: '10px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Normal state border
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Hover state border
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Focused state border
                    borderWidth: '0px', // You can change the borderWidth on focus if needed
                  },
                  // This will remove the default Material-UI focus glow
                  '&.Mui-focused': {
                    boxShadow: 'none',
                  },
                },
              },
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default ChatModal;
