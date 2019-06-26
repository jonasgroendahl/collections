const styles = theme => ({
  flex: {
    display: "flex",
    marginTop: 40,
    "& button": {
      minHeight: 60,
      maxWidth: "20%"
    },
    "& .selected": {
      backgroundColor: "white",
      color: "black"
    }
  }
});

export default styles;
