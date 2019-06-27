const styles = theme => ({
  TableStyles: {
    "& th": {
      borderBottomColor: theme.palette.primary.main,
      fontSize: "1rem",
      fontWeight: 700,
      color: "#3c3c3b",
      textTransform: "uppercase",
      "&:first-child": {
        width: 50
      }
    },
    "& td": {
      borderBottomColor: theme.palette.primary.main
    }
    /*
    "& tbody tr:hover": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      "& svg > path:first-child": {
        fill: "white"
      }
    }
    */
  }
});

export default styles;
