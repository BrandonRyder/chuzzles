/*index.jsx*/
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from "@material-ui/core";
import { NavBar } from './sharedElements'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { green, red } from "@material-ui/core/colors";
import Puzzle from "./displayPuzzle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '100%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const PuzzleCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image="/puzzleImages/easy_puzzle_1.png"
        title="easy puzzle 1"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="Chuzzles" className={classes.avatar}>
            C
          </Avatar>
        }
        title="Easy Puzzle 1"
        subheader="Upload Date Place Holder"
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is the only puzzle I hope you like it.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Play"  href="Puzzle">
          <PlayArrowIcon style={{color: green[500]}}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

//Functional Component
const SelectionPage = () => {
  return (
    <Grid container
    direction="row"
    justify="space-evenly"
    alignItems="baseline"
    style = {{padding: 20}} spacing = {3}
    >
    <NavBar/>
    <PuzzleCard   />
    </Grid>
  );
};

export default SelectionPage;
