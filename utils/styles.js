import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    "& a": {
      color: "#1B1E23",
      marginLeft: 10,
      textTransform: "none",
    },
  },
  logo: {
    display: "flex",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    marginTop: 10,
    marginLeft: 10,
  },
  grow: {
    flexGrow: 1,
  },
  smallText: {
    fontSize: "12px",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    marginTop: 200,
    textAlign: "center",
    marginBottom: 50,
  },
  section: {
    color: "#FFAE42",
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
    marginTop: "5rem",
  },
  mt: {
    marginTop: "3rem",
  },
  txc: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
  title: {
    textDecorationLine: "none",
    color: "inherit",
  },
});
export default useStyles;
