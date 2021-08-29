import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import User from "../api/User";

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

export default function CreateAccount({  } : Props) {
  const [Username, setUsername] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [usernameTaken, setUsernameTaken] = React.useState(false);

  var user : User; // This is initialized when the createAccount function is called and populates it for the post request

  // Create new user
  const createAccount = async () => {
    user = new User(Username,Password,Email);
    const res = await fetch("http://localhost:8080/api/user/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      return response.text()
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(data);
    });

    const data = await res; // get the data from the post request
  }

  const checkUsername = async (username : string) => {
    const res = await fetch(`http://localhost:8080/api/user/exist?username=${username}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(response => {
      response.text().then(e => {
        var taken = (e === 'true');
        setUsernameTaken(taken);
      });
    })
    .catch((error) => {
      console.log(data);
    });

    const data = await res;
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
            Create New Account
          </Typography>
        </CardContent>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          noValidate
          autoComplete="off"
        >
          <ul style={{ listStyleType: "none" }}>
            <li style={{marginTop: '2%', marginBottom:'5%'}}>
              <TextField error={usernameTaken} helperText={usernameTaken ? `${Username} has already been taken` : ''} id="username" label="Username" value={Username} onChange={
                (e) => {
                  setUsername(e.target.value);
                  checkUsername(e.target.value);
                }
                }
                />
            </li>
            <li style={{marginTop: '2%', marginBottom:'5%'}}>
              <TextField id="email" label="Email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
            </li>
            <li style={{marginTop: '2%', marginBottom:'5%'}}>
              <TextField id="password" label="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </li>
            <li>
              <TextField id="confirm-password" label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
          <Button size="medium" onClick={() => createAccount()}>Create Account</Button>
        </CardActions>
      </Card>
    </div>
  );
}
