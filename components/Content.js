import { Box, styled } from "@mui/material";
import { Button } from "@mui/material";
import MyCountdown from "./MyCountdown";

const Content = ({
  content,
  mycolor = "#fff",
  myfontsize = 1,
  notifybuttonfunction,
  moreinformationbuttonfunction,
  count,
  enddate=[],
}) => {
  const buttonCss = {
    borderRadius: "0px",
    fontSize: `${myfontsize}em`,
    height: "2.5em",
    padding: " 0 1em",
    transition: "0.3s",
    "&:hover": {
      opacity: 0.9,
      borderRadius: "10px",
    },
  };
  const Text = styled("h1")(({ mysx = {} }) => ({
    color: mycolor,
    fontFamily: "roboto",
    ...mysx,
  }));
  return (
    <Box>
      <Text
        mysx={{
          fontSize: `${myfontsize * 2}em`,
          weight: 700,
          margin: "0 0 1em 0",
        }}
      >
        <a href={"https://landing-page-beige-two.vercel.app/"}>
          {content.logo}
        </a>
      </Text>
      <MyCountdown
        count={count}
        endcountdownmessage="00:00:00:00"
        myfontsize={myfontsize * 4.5}
        myweight="bold"
        mycolor={mycolor}
        enddate={enddate}
        showday
      />
      <Text
        mysx={{
          fontSize: `${myfontsize * 4}em`,
          weight: 700,
          margin: "0.35em 0 0 0",
        }}
      >
        {content.title1}
      </Text>
      <Text
        mysx={{
          fontSize: `${myfontsize * 4}em`,
          weight: 700,
          margin: "0.35em 0 0 0",
        }}
      >
        {content.title2}
      </Text>
      <Text
        mysx={{
          fontSize: `${myfontsize * 1.2}em`,
          weight: 500,
          margin: "0 0 2em 0",
        }}
      >
        {content.reminder1}
      </Text>
      <Text
        mysx={{
          fontSize: `${myfontsize * 1.2}em`,
          weight: 500,
          margin: "0 0 2em 0",
        }}
      >
        {content.reminder2}
      </Text>

      <Button
        onClick={notifybuttonfunction}
        sx={{
          ...buttonCss,
          backgroundColor: mycolor,
          color: "#333",
          "&:hover": {
            ...buttonCss["&:hover"],
            backgroundColor: mycolor,
            color: "#333",
          },
        }}
      >
        {content.subscriptionText}
      </Button>
      <Button
        onClick={moreinformationbuttonfunction}
        sx={{
          ...buttonCss,
          marginLeft: "0.5em",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          color: mycolor,
          border: `3.5px solid ${mycolor}`,
        }}
      >
        {content.moreDetailsText}
      </Button>
    </Box>
  );
};
export default Content;
