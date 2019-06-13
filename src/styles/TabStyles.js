const styles = theme => ({
  flex: {
    display: "flex",
    "& button": {
      minHeight: 60,
      maxWidth: "20%",
      marginTop: 20
    },
    "& .selected": {
      backgroundColor: "white",
      color: "black"
    }
  }
});

export default styles;
