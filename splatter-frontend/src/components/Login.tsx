import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const cardStyle = {
  minWidth: 275,
  width: "40%",
  height: "30%",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  position: "absolute" as "absolute",
};

interface Props{
    loginState : boolean
    setLoginState : any
    setTokenState : any
}

export default function Login({ loginState, setLoginState, setTokenState } : Props) {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const login = async (username : string, password : string) => {
    //TODO login in using the backend
    console.log(username);
    console.log(password);
    setLoginState(true);
  }

  return (
    <div style={cardStyle}>
      <Card elevation={3}>
        <CardContent>
          <Typography
            sx={{ fontSize: 36, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Login
          </Typography>
        </CardContent>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          noValidate
          autoComplete="off"
        >
          <ul style={{ listStyleType: "none" }}>
            <li style={{marginTop: '2%', marginBottom:'5%'}}>
              <TextField id="username" label="Username" value={Username} onChange={(e) => setUsername(e.target.value)}/>
            </li>
            <li>
              <TextField id="password" label="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </li>
          </ul>
        </form>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "4.5%",
          }}
        >
          <Link to="/createAccount" style={{ textDecoration: "none" }}>
            <Button size="medium">Create Account</Button>
          </Link>
          <Button size="medium" onClick={() => login(Username, Password)}>Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}
