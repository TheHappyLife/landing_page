import { Box, TextField, Button, IconButton } from "@mui/material";
import Features from "./Features";
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import CloseIcon from "@mui/icons-material/Close";

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

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA0inBpFDtOVi2C5f3q1hkltDRmCMHUkLM">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "250px",
        }}
        center={{
          lat: 10.027254,
          lng: 105.769806,
        }}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

const IntroducePage = ({ introducecontents, oncloseintroducepage }) => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fff", overflowY: "scroll", height: '100vh' }}>
      <IconButton
        onClick={oncloseintroducepage}
        sx={{
          position: "fixed",
          top: "20px",
          right: "10px",
          opacity: 0.8,
          zIndex: 10,
        }}
      >
        <CloseIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <h1>{introducecontents.title}</h1>
      <p>{introducecontents.description}</p>
      <Features features={introducecontents.features}></Features>
      <Box className="skills">
        <h1>{introducecontents.skillTitle}</h1>
        {introducecontents.skills.map((skill, index) => (
          <SkillItem
            skill={skill.skill}
            value={skill.value}
            key={index}
          ></SkillItem>
        ))}
      </Box>
      <Box className="contact">
        <h1>{introducecontents.contactTitle}</h1>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <h3>Address</h3>
            <p>{introducecontents.contacts.address}</p>
          </Box>
          <Box sx={{ width: "50%" }}>
            <h3>Social</h3>
            {introducecontents.contacts.socials.map((social, index) => (
              <SocialItem social={social} key={index}></SocialItem>
            ))}
          </Box>
        </Box>
        <Box className="map">
          <h1>Map</h1>
          {/* <MyGoogleMap></MyGoogleMap> */}
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
                label={introducecontents.nameInputPlaceholder}
                variant="outlined"
              />
              <TextField
                sx={{
                  width: `calc(50% - 5px)`,
                }}
                id="outlined-basic"
                label={introducecontents.emailInputPlaceholder}
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
              label={introducecontents.messageInputPlaceholder}
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
              {introducecontents.buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroducePage;
