import Countdown from "react-countdown";
import {styled} from "@mui/material";

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))
  

const Item = styled('div')(() => ({
  position: 'relative'
}))

const Doc = styled('div')(({myFontSize, myColor}) => ({
  width: `${myFontSize / 5}em`,
  height: `${myFontSize / 5}em`,
  borderRadius: `10em`,
  backgroundColor: `${myColor}`,
  margin: `4px ${myFontSize / 5}em 0`,
  opacity: `0.7`
}))

const Num = styled('div')(({myFontSize, myColor, myWeight}) => ({
  color: `${myColor}`,
  fontSize: `${myFontSize}em`,
  fontWeight: `${myWeight}`
}))
 
const Unit = styled('div')(({myFontSize, myColor}) => ({
  position: `absolute`,
  fontSize: `${myFontSize / 5}em`,
  color: `${myColor}`,
  left: `0`,
  top: `calc(100% - ${myFontSize / 5}em)`,
  marginLeft: `5px`,
  opacity: `0.7`
}))

const MyCountdown = ({
  mSeconds = 10000,
  color = "#fff",
  fontSize = 1,
  weight = "normal",
}) => {
  const Completionist = () => <span>You are good to go!</span>;

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
        <Container>
          <Item>
            <Num myFontSize={fontSize} myWeight={weight} myColor={color}>{hoursString}</Num>
            <Unit myFontSize={fontSize} myColor={color}>HOURS</Unit>
          </Item>
          <Doc myFontSize={fontSize} myColor={color} />
          <Item>
            <Num myFontSize={fontSize} myWeight={weight} myColor={color}>{minutesString}</Num>
            <Unit myFontSize={fontSize} myColor={color}>MINUTES</Unit>
          </Item>
          <Doc myFontSize={fontSize} myColor={color} />
          <Item>
            <Num myFontSize={fontSize} myWeight={weight} myColor={color}>{secondsString}</Num>
            <Unit myFontSize={fontSize} myColor={color}>SECONDS</Unit>
          </Item>
        </Container>
      );
    }
  };
  return <Countdown date={Date.now() + mSeconds} renderer={renderer} />;
};
export default MyCountdown;
