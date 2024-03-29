import React, { Component } from "react"

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Chuzzles
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    )
}

export  { NavBar }
