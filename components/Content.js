import { styled } from "@mui/material";
import { Button } from "@mui/material";
import MyCountdown from "./MyCountdown";

const Content = ({ content, color = "#fff", fontSize = 1, countdownTime = 200000 }) => {
  const ContentWrapper = styled("div")(() => ({
    fontSize: `${fontSize}rem`
  }));
  const Text = styled("h1")(
    ({ color = "fff", fontSize = "2em", weight = "normal" }) => ({
      color: color,
      fontSize: fontSize,
      fontWeight: weight,
    })
  );
  const SubscribeButton = styled(Button)(
    ({ textColor = "#000", backgroundColor = "#fff" }) => ({
      color: textColor,
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      fontSize: '1.1em',
      height: '2.5em',
      padding: '0px 1em',
      textTransform: 'capitalize',
      transition: '0.2s',
      "&:hover": {
        color: textColor,
        backgroundColor: backgroundColor,
        opacity: '0.9',
        borderRadius: "8px",
      },
    })
  );
  const DetailsButton = styled(Button)(({ textColor = "#000" }) => ({
    color: textColor,
    marginLeft: '0.5em',
    backgroundColor: "transparent",
    textTransform: 'capitalize',
    borderRadius: "0px",
    border: `3px solid ${textColor}`,
    boxSizing: "border-box",
    fontSize: '1.1em',
    transition: '0.2s',
    height: '2.5em',
    padding: '0px 1em',
    "&:hover": {
        opacity: '0.9',
        borderRadius: "8px",
    },
  }));
  return (
    <ContentWrapper>
      <Text color={color} fontSize={"4em"} weight={"700"}>
        {content.logo}
      </Text>
      <MyCountdown
        mSeconds={countdownTime}
        fontSize={4.5}
        weight="bold"
        color={color}
      />
      <Text color={color} fontSize={"3em"} weight={"700"}>
        {content.title1}
      </Text>
      <Text color={color} fontSize={"3em"} weight={"700"}>
        {content.title2}
      </Text>
      <Text color={color} fontSize={"1.2em"} weight={"500"}>{content.reminder1}</Text>
      <Text color={color} fontSize={"1.2em"} weight={"500"}>{content.reminder2}</Text>
      <SubscribeButton backgroundColor={color} textColor={'#000'}>{content.subscriptionText}</SubscribeButton>
      <DetailsButton textColor={color}>{content.moreDetailsText}</DetailsButton>
    </ContentWrapper>
  );
};
export default Content;
