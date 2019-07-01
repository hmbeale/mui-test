import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import testImage from '../images/ACDP1_Logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    borderStyle: 'dotted',
    //width: "100%",
    maxHeight: 200,
    //backgroundColor: theme.palette.background.paper     
  },
  img: {
      maxHeight:300
  }
}));


export default function OverFlowImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={testImage} alt="acdp logo" className={classes.img} /> 
    </div>
  );
}
