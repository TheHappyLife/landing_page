import { Box } from "@mui/material";

const Feature = ({ feature, indexProps }) => {
  return (
    <Box
      sx={{
        width: "calc(50% - 10px)",
        marginLeft: indexProps % 2 !== 0 ? "10px" : 0,
        marginRight: indexProps % 2 === 0 ? "10px" : 0,
      }}
    >
      <img
        style={{ width: "100%", height: "200px" }}
        src={feature.image}
        alt="Iamge has being load"
      />
      <h3>{feature.title}</h3>
      <div
        style={{
          backgroundColor: "rgb(54, 54, 54)",
          height: "3px",
          width: "8%",
          borderRadius: "2px",
        }}
        className="under-line"
      ></div>
      <p>{feature.description}</p>
    </Box>
  );
};
const Features = ({ features }) => {
  return (
    <a target={"_blank"} href="feature.image" style={{ display: "flex", flexWrap: "wrap" }}>
      {features.map((feature, index) => (
        <Feature feature={feature} key={index} indexProps={index}/>
      ))}
    </a>
  );
};
export default Features;
