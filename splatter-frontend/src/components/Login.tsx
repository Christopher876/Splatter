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

export default function BasicTextFields() {
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
            <li style={{marginTop: '5%'}}>
              <TextField id="standard-basic" label="Username"/>
            </li>
            <li>
              <TextField id="standard-basic" label="Password" type="password" />
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
          <Button size="medium">Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}
//   title: {
//     fontSize: 36,
//     textAlign: 'center'
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// const Login = () => {
//   const classes = useStyles;

//   return (
//     <Card className={classes.root} elevation={3}>
//       <CardContent>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           gutterBottom
//         >
//           Login
//         </Typography>
//         <div>
//         <form style={{ display:'flex', justifyContent:'center' }} noValidate autoComplete="off">
//             <ul style={{listStyleType: 'none'}}>
//             <li><TextField id="standard-basic" label="Username"/></li>
//             <li><TextField id="standard-basic" label="Password" type='password'/></li>
//             </ul>
//         </form>
//         </div>
//       </CardContent>
//       <CardActions style={{ display:'flex', justifyContent:'center', marginLeft:'4.5%' }}>
//         <Link to='/createAccount' style={{ textDecoration: 'none' }}><Button size="medium">Create Account</Button></Link>
//         <Button size="medium">Login</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Login;
