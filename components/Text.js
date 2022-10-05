import { styled } from "@mui/material";
const Text = ({ color = "fff", fontSize = "2em", weight = "normal", margin = '0', children }) => {
    const FormatText = styled("h1")(
        () => ({
          color: color,
          fontSize: fontSize,
          fontWeight: weight,
          margin: margin,
          textShadow: '0px 0px 3px #6B778D'
        })
    );
    return (
        <FormatText>{children}</FormatText>
    )
}
export default Text;
