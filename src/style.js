const color = "red"

const mainStyle = {
  color: `${color}`,
  fontFamily: "monospace",
  textTransform: "uppercase",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#222",
  position: "absolute",
  top: 0,
  left: 0,
}

const sectionStyle = {
  width: "80%",
  height: "80%",
  borderRadius: "10px",
  border: `1px solid ${color}`,
  padding: "1em",
  overflow: "scroll",
}

const inputAndButtonStyle = {
  outline: "none",
  borderRadius: "5px",
  border: `1px solid ${color}`,
  backgroundColor: "transparent",
  color: `${color}`,
  margin: "0 .5em",
  textTransform: "uppercase",
}

export { mainStyle, sectionStyle, inputAndButtonStyle }
