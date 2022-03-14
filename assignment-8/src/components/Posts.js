import React from "react";
import "./Posts.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = (props) => {
  const classes = useStyles();
  const { userId, id, title, body } = props.post;
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          User ID: {userId}
        </Typography>
        <Typography variant="h5" component="h2">
          ID: {id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Title: {title}
        </Typography>
        <Typography variant="body2" component="p">
          Description: {body}
          <br />
        </Typography>
      </CardContent>
      <Link to={`/posts/${id}`}>
        <Button variant="outlined" color="primary">
          See More
        </Button>
      </Link>
    </Card>
  );
};

export default Posts;
