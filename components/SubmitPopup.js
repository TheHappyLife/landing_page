import { Box, TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SubmitPopup = ({ popupContent, closepopup }) => {
  return (
    <Box
      sx={{
        width: "450px",
        backgroundColor: "#fff",
        padding: "30px 60px 60px 60px",
        borderRadius: "10px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>{popupContent.title}</h1>
      <p>{popupContent.description}</p>
      <h3>{popupContent.inputLabel}</h3>
      <TextField fullWidth label={popupContent.inputLabel} id="fullWidth" />
      <Button
        sx={{
          color: '#fff',
          backgroundColor: '#555',
          fontSize: "1.1em",
          height: "2.5em",
          padding: "0px 1em",
          transition: "0.2s",
          textTransform: "capitalize",
          width: "100%",
          borderRadius: "8px",
          marginTop: "10px",
          "&:hover": {
            backgroundColor: '#555',
            opacity: "0.7",
          },
        }}
      >
        {popupContent.buttonContent}
      </Button>
      <IconButton
        style={{ position: "absolute", top: "54px", right: "54px" }}
        onClick={closepopup}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
export default SubmitPopup;
