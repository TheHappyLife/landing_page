import Countdown from "react-countdown";
import styled from "styled-components";

const MyCountdown = ({
  mSeconds = 10000,
  color = "#fff",
  fontSize = 1,
  weight = "normal",
}) => {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;
  const Item = styled.div`
  position: relative;
  `;

  const Doc = styled.div`
    width: ${fontSize / 5}em;
    height: ${fontSize / 5}em;
    border-radius: 10em;
    background-color: ${color};
    margin: 4px ${fontSize / 5}em 0;
    opacity: 0.7;
  `;
  const Num = styled.div`
    color: ${color};
    font-size: ${fontSize}em;
    font-weight: ${weight};
  `;

  const Unit = styled.div`
  position: absolute;
  font-size: ${fontSize/5}em;
  color: ${color};
  left: 0;
  top: calc(100% - ${fontSize/5}em);
  margin-left: 5px;
  opacity: 0.7;
  `;

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
        </Container>
      );
    }
  };
  return <Countdown date={Date.now() + mSeconds} renderer={renderer} />;
};
export default MyCountdown;
