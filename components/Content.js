import { styled } from "@mui/material";
import { Button } from "@mui/material";
import MyCountdown from "./MyCountdown";
import Text from "./Text";

const Content = ({ content, color = "#fff", fontSize = 1, countdownTime = 200000 }) => {
  const ContentWrapper = styled("div")(() => ({
    fontSize: `${fontSize}rem`
  }));
  const SubscribeButton = styled(Button)(
    ({ textColor = "#000", MyBackgroundColor = "#fff" }) => ({
      color: textColor,
      backgroundColor: MyBackgroundColor,
      borderRadius: "0px",
      fontSize: '1.1em',
      height: '2.5em',
      padding: '0px 1em',
      textTransform: 'capitalize',
      transition: '0.2s',
      "&:hover": {
        color: textColor,
        backgroundColor: MyBackgroundColor,
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
    border: `3.5px solid ${textColor}`,
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
      <Text color={color} fontSize={"2em"} weight={"700"} margin='0 0 1em 0'>
        <a href={'https://landing-page-beige-two.vercel.app/'}>{content.logo}</a>
      </Text>
      <MyCountdown
        mSeconds={countdownTime}
        fontSize={4.5}
        weight="bold"
        color={color}
      />
      <Text color={color} fontSize={"4em"} weight={"700"} margin='0.35em 0 0 0'>
        {content.title1}
      </Text>
      <Text color={color} fontSize={"4em"} weight={"700"} margin='0 0 0.35em 0'>
        {content.title2}
      </Text>
      <Text color={color} fontSize={"1.2em"} weight={"500"}>{content.reminder1}</Text>
      <Text color={color} fontSize={"1.2em"} weight={"500"} margin='0 0 2em 0'>{content.reminder2}</Text>
      <SubscribeButton MyBackgroundColor={color} textColor={'#000'}>{content.subscriptionText}</SubscribeButton>
      <DetailsButton textColor={color}>{content.moreDetailsText}</DetailsButton>
    </ContentWrapper>
  );
};
export default Content;
