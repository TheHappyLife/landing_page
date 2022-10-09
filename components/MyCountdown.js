import { styled, Box } from "@mui/material";
import { useEffect, useState } from "react";

const MyCountdown = ({
  totalseconds = 3600,
  endcountdownmessage = "You are good to go!",
  mycolor = "#fff",
  myfontsize = 1,
  myweight = "normal",
  showday,
  count,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(totalseconds);
  useEffect(() => {
    if (count)
      var countInterval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    else clearInterval(countInterval);
    return () => clearInterval(countInterval);
  }, [count]);

  const createTime = (totalSeconds) => {
    if (totalSeconds > 0) {
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor(
        totalSeconds < 3600
          ? totalSeconds / 60
          : (totalSeconds % (days * 86400 + hours * 3600)) / 60
      );
      const seconds = Math.floor(totalSeconds % 60);
      return {
        days: days > 9 ? days.toString() : "0" + days,
        hours: hours > 9 ? hours.toString() : "0" + hours,
        minutes: minutes > 9 ? minutes.toString() : "0" + minutes,
        seconds: seconds > 9 ? seconds.toString() : "0" + seconds,
        isComplete: false,
      };
    } else return { isComplete: true };
  };

  const Countdown = ({ time }) => {
    if (time.isComplete)
      return (
        <span style={{ fontSize: `${myfontsize}em`, color: mycolor }}>
          {endcountdownmessage}
        </span>
      );
    else {
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
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {showday && (
            <Item>
              <Num>{time.days ? time.days : "00"}</Num>
              <Unit>DAYS</Unit>
            </Item>
          )}
          {showday && <Doc />}
          <Item>
            <Num>{time.hours ? time.hours : "00"}</Num>
            <Unit>HOURS</Unit>
          </Item>
          <Doc />
          <Item>
            <Num>{time.minutes ? time.minutes : "00"}</Num>
            <Unit>MINUTES</Unit>
          </Item>
          <Doc />
          <Item>
            <Num>{time.seconds ? time.seconds : "00"}</Num>
            <Unit>SECONDS</Unit>
          </Item>
        </Box>
      );
    }
  };
  return <Countdown time={createTime(timeRemaining)} />;
};
export default MyCountdown;
