import { Box, styled, TextField, Button, IconButton } from "@mui/material";
import MyImageList from "../components/MyImageList";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import CloseIcon from "@mui/icons-material/Close";

const Wrapper = styled(Box)(() => ({
  padding: "20px",
}));

const SkillItem = ({ skill, value, height = 4 }) => {
  let skillValue = value > 100 ? 100 : value;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>{skill}</h3>
        <span>{`${skillValue}%`}</span>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: `${height}px`,
          backgroundColor: "#F0EBE3",
        }}
      >
        <Box
          sx={{
            width: `${skillValue}%`,
            height: "100%",
            backgroundColor: "#A2B5BB",
          }}
        ></Box>
      </Box>
    </>
  );
};
const SocialItem = ({ social }) => {
  let svg = social.iconSVG;
  let viewBox = svg.slice(
    svg.indexOf("viewBox=") + 9,
    svg.indexOf('">', svg.indexOf("viewBox="))
  );
  let path = svg.slice(
    svg.indexOf("<path d=") + 9,
    svg.indexOf('"/>', svg.indexOf("<path d="))
  );
  return (
    <a style={{ display: "flex", alignItems: "center" }} href={social.link}>
      <svg
        width={20}
        height={16}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path d={path} />
      </svg>
      <span>{social.social}</span>
    </a>
  );
};
const containerStyle = {
  width: "100%",
  height: "250px",
};

const center = {
  lat: 10.027254,
  lng: 105.769806,
};

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA0inBpFDtOVi2C5f3q1hkltDRmCMHUkLM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

const IntroducePage = ({ introduceContents, onCloseIntroducePage }) => {
  return (
    <Wrapper>
      <IconButton
      onClick={onCloseIntroducePage}
        sx={{
          position: "fixed",
          top: "20px",
          right: "20px",
          opacity: 0.8
        }}
      >
        <CloseIcon sx={{fontSize: "40px",}} />
      </IconButton>
      <h1>{introduceContents.title}</h1>
      <p>{introduceContents.description}</p>
      <MyImageList features={introduceContents.features}></MyImageList>
      <Box className="skills">
        <h1>{introduceContents.skillTitle}</h1>
        {introduceContents.skills.map((skill, index) => (
          <SkillItem
            skill={skill.skill}
            value={skill.value}
            key={index}
          ></SkillItem>
        ))}
      </Box>
      <Box className="contact">
        <h1>{introduceContents.contactTitle}</h1>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <h3>Address</h3>
            <p>{introduceContents.contacts.address}</p>
          </Box>
          <Box sx={{ width: "50%" }}>
            <h3>Social</h3>
            {introduceContents.contacts.socials.map((social, index) => (
              <SocialItem social={social} key={index}></SocialItem>
            ))}
          </Box>
        </Box>
        <Box className="map">
          <h1>Map</h1>
          <MyGoogleMap></MyGoogleMap>
        </Box>
        <Box className="contactForm">
          <h1>Contact Form</h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <TextField
                sx={{
                  width: `calc(50% - 5px)`,
                  marginRight: "10px",
                }}
                id="outlined-basic"
                label={introduceContents.nameInputPlaceholder}
                variant="outlined"
              />
              <TextField
                sx={{
                  width: `calc(50% - 5px)`,
                }}
                id="outlined-basic"
                label={introduceContents.emailInputPlaceholder}
                variant="outlined"
              />
            </Box>
            <TextField
              sx={{
                marginTop: "20px",
              }}
              fullWidth
              rows={4}
              multiline
              label={introduceContents.messageInputPlaceholder}
              variant="outlined"
            />
            <Button
              sx={{
                backgroundColor: "#494949",
                marginTop: "20px",
                marginLeft: "auto",
                "&:hover": {
                  backgroundColor: "#494949",
                  opacity: 0.8,
                },
              }}
              variant="contained"
            >
              {introduceContents.buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default IntroducePage;
