import Countdown from "react-countdown";
import { styled, Box } from "@mui/material";

const MyCountdown = ({
  miliseconds = 100000,
  endcountdownmessage = "You are good to go!",
  mycolor = "#fff",
  myfontsize = 1,
  myweight = "normal",
}) => {
  const Item = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const Num = styled("div")(() => ({
    color: `${mycolor}`,
    fontSize: `${myfontsize}em`,
    fontWeight: `${myweight}`,
    lineHeight: "100%",
  }));

  const Unit = styled("div")(() => ({
    fontSize: `${myfontsize / 5}em`,
    color: `${mycolor}`,
    opacity: `0.7`,
  }));

  const Doc = styled("div")(() => ({
    width: `${myfontsize / 5}em`,
    height: `${myfontsize / 5}em`,
    borderRadius: `10em`,
    backgroundColor: `${mycolor}`,
    margin: `0 ${myfontsize / 6}em 0`,
    opacity: `0.7`,
  }));

  const Completionist = () => (
    <span style={{ color: mycolor, fontSize: `${myfontsize}em` }}>
      {endcountdownmessage}
    </span>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      let hoursString = hours < 10 ? "0" + hours.toString() : hours.toString();
      let minutesString =
        minutes < 10 ? "0" + minutes.toString() : minutes.toString();
      let secondsString =
        seconds < 10 ? "0" + seconds.toString() : seconds.toString();
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Item>
            <Num>{hoursString}</Num>
            <Unit>HOURS</Unit>
          </Item>
          <Doc />
          <Item>
            <Num>{minutesString}</Num>
            <Unit>MINUTES</Unit>
          </Item>
          <Doc />
          <Item>
            <Num>{secondsString}</Num>
            <Unit>SECONDS</Unit>
          </Item>
        </Box>
      );
    }
  };
  return <Countdown date={Date.now() + miliseconds} renderer={renderer} />;
};
export default MyCountdown;
