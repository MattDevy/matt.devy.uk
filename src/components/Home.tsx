import React from "react";

import { Container, Paper, Typography, Divider } from "@material-ui/core";

import {
  Theme,
  useTheme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      width: "100%",
      padding: theme.spacing(3),
      margin: theme.spacing(3),
    },
    header: {
      margin: theme.spacing(3),
    },
    divider: {
      margin: theme.spacing(2),
    },
    body: {
      margin: theme.spacing(3),
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Paper className={classes.paper}>
        <Typography variant="h1" className={classes.header}>
          Welcome
        </Typography>
        {/* <Divider className={classes.divider}/> */}
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h3" className={classes.header}>
          Introduction
        </Typography>
        <Typography variant="body1" className={classes.body}>
          Welcome to my site. Where you can find my latest:
          <ul>
            <li>Personal projects</li>
            <li>Development interests</li>
          </ul>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
