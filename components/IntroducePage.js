import { Box, styled } from "@mui/material";
import Text from "./Text";
import MyImageList from "../components/MyImageList";

const Wrapper = styled(Box)(() => ({
  padding: "20px",
}));

const SkillItem = ({ skill, value, height = 4 }) => {
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
        <span>{`${value}%`}</span>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: `${height}px`,
          backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            width: `${value}%`,
            height: "100%",
            backgroundColor: "blue",
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

const IntroducePage = ({ introduceContents }) => {
  return (
    <Wrapper>
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
          <Box sx={{width: '50%'}}>
            <h3>Address</h3>
            <p>{introduceContents.contacts.address}</p>
          </Box>
          <Box sx={{width: '50%'}}>
            <h3>Social</h3>
            {introduceContents.contacts.socials.map((social, index) => (
              <SocialItem social={social} key={index}></SocialItem>
            ))}
          </Box>
        </Box>
        <Box className="map">
            <h1>Map</h1>
            <Box></Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default IntroducePage;
