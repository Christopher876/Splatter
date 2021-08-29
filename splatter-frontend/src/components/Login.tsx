import * as React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import Token from "../api/Token";

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
  const [validLogin, setValidLogin] = React.useState(true); // Set to true so that the message does not appear on the first login attempt

  const history = useHistory();

  const login = async () => {
    const res = await fetch(`http://localhost:8080/api/user/login?username=${Username}&password=${Password}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(response => {
      //* Successful login - Handle keeping the user logged in and store the refresh token, etc.
      response.text().then(
        data => {
          var o = JSON.parse(data);
          // Check if the error property exists. If it does, invalid login
          if('error' in o){
            // Send a message about invalid login
            setValidLogin(false);
            return;
          }
          // Send states to make the account icon appear
          else{
            let token = new Token(o);
            setValidLogin(true);
            setTokenState(token);
            setLoginState(true);

            // Reroute to the dashboard if we were successful
            history.push('/Dashboard');
          }
        }
      );
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
              <TextField id="username" label="Username" value={Username} onChange={
                (e) =>{ 
                  setUsername(e.target.value);
                }
              }
              />
            </li>
            <li>
              <TextField id="password" label="Password" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            </li>
            <li>
              {validLogin ? '' : <p style={{textAlign:'center',color:'red'}}>Invalid Login</p>}
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
          <Button size="medium" onClick={login}>Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}
