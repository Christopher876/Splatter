import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AutorenewTwoTone } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '30%',
    width: '40%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  formRoot: {
    '& > *': {
      width: '25ch',
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 36,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
});

const Login = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Login
        </Typography>
        <div>
        <form style={{ display:'flex', justifyContent:'center' }} noValidate autoComplete="off">
            <ul style={{listStyleType: 'none'}}>
            <li><TextField id="standard-basic" label="Username"/></li>
            <li><TextField id="standard-basic" label="Password" type='password'/></li>
            </ul>
        </form>
        </div>
      </CardContent>
      <CardActions style={{ display:'flex', justifyContent:'center', marginLeft:'4.5%' }}>
        <Link to='/createAccount' style={{ textDecoration: 'none' }}><Button size="medium">Create Account</Button></Link>
        <Button size="medium">Login</Button>
      </CardActions>
    </Card>
  );
};

export default Login;
