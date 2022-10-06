import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

const SubscribeButton = styled(Button)(
  ({ textColor = "#000", myBackgroundColor = "#fff" }) => ({
    color: textColor,
    backgroundColor: myBackgroundColor,
    fontSize: "1.1em",
    height: "2.5em",
    padding: "0px 1em",
    transition: "0.2s",
    textTransform: "capitalize",
    width: "100%",
    borderRadius: "8px",marginTop: '10px',
    "&:hover": {
      backgroundColor: myBackgroundColor,
      opacity: "0.7",
    },
  })
);

const SubmitPopup = ({ popupContent, closePopup }) => {
  return (
    <Box
      sx={{
        width: "450px",
        backgroundColor: "#fff",
        padding: "60px",
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
      <SubscribeButton myBackgroundColor={"#CFD2CF"}>
        {popupContent.buttonContent}
      </SubscribeButton>
      <IconButton style={{position: 'absolute', top: '84px', right: '54px'}} onClick={closePopup}>
        <CloseIcon/>
      </IconButton>
    </Box>
  );
};
export default SubmitPopup;
