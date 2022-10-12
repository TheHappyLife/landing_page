import { Box, Button, styled } from "@mui/material";
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


  return (
    <Box>
      <h1
        style={{
          fontFamily: 'robonto',
          color: mycolor,
          fontSize: `${myfontsize * 2}em`,
          weight: 700,
          margin: "0 0 1em 0",
        }}
      >
        <a href={"https://landing-page-beige-two.vercel.app/"}>
          {content.logo}
        </a>
      </h1>
      <MyCountdown
        count={count}
        endcountdownmessage="00:00:00:00"
        myfontsize={myfontsize * 4.5}
        myweight="bold"
        mycolor={mycolor}
        enddate={enddate}
        showday
      />
      <h2
        style={{
          fontFamily: 'robonto',
          color: mycolor,
          fontSize: `${myfontsize * 4}em`,
          weight: 700,
          margin: "0.35em 0 0 0",
        }}
      >
        {content.title1}
      </h2>
      <h2
        style={{
          fontFamily: 'robonto',
          color: mycolor,
          fontSize: `${myfontsize * 4}em`,
          weight: 700,
          margin: "0.35em 0 0 0",
        }}
      >
        {content.title2}
      </h2>
      <h3
        style={{
          fontFamily: 'robonto',
          color: mycolor,
          fontSize: `${myfontsize * 1.2}em`,
          weight: 500,
          margin: "0 0 2em 0",
        }}
      >
        {content.reminder1}
      </h3>
      <h3
        style={{
          fontFamily: 'robonto',
          color: mycolor,
          fontSize: `${myfontsize * 1.2}em`,
          weight: 500,
          margin: "0 0 2em 0",
        }}
      >
        {content.reminder2}
      </h3>

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
