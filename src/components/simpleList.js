import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    //width: "100%",
    //maxWidth: 360,
    //backgroundColor: theme.palette.background.paper
  },
  ul: {
    color: 'blue'
  }
}));


export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <li className={classes.ul}>
          foo          
      </li>
      <li className={classes.ul}>
          bar          
      </li>
    </div>
  );
}
