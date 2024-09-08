import { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box, Checkbox, Collapse } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser, UserLogin } from '../store/slice';
import { ActiveUser } from '../components/constants';

const Login = () => {
  const users = useSelector((state) => state.Users.List);
  const dispatch = useDispatch();
  const [createAccount, setcreateAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  const [error, seterror] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    seterror("")
    var data = users.filter(arr => arr.Email === email)
    if (createAccount) {
      if(!email ) {
        seterror("please Enter email ")
        return;
      }
      if(!Username) {
        seterror("please Enter Username")
        return;
      }
      if(!password ) {
        seterror("please Enter password")
        return;
      }
      if (data.length > 0) {
        seterror("Alredy Registerd pls Sign in")
        return;
      }
      var Details = { ...ActiveUser }; 
      Details.Email = email;
      Details.UserName = Username;
      Details.Password = password

      dispatch(UpdateUser(Details));
      setcreateAccount(false);
      setPassword("")

    } else {
      if (!email || !password) {
        return;
      }
      if (data.length > 0) {
        if (email === data[0].Email && password === data[0].Password) {
          dispatch(UserLogin(data[0]));
        } else {
          seterror('Envaild Password');

        }
      } else {
        seterror('Envaild Email');
      }
    }
  };
  useEffect(() => {
    seterror("")
  }, [createAccount])

  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.default"
        borderRadius="8px"
        boxShadow={3}
        paddingX="100px"
        paddingY="50px"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {createAccount ? "Create an Account" : "Login to Account"}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {createAccount ? "Create an Account to continue" : "Please enter your email and password to continue"}
        </Typography>

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <label>
              Email Address:
            </label>
          </div>
          <TextField
            fullWidth
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Collapse in={createAccount}>
            <div style={{ display: "flex", justifyContent: "left" }}>
              <label>
                Username:
              </label>
            </div>
            <TextField
              fullWidth
              type="text"
              variant="outlined"
              margin="normal"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Collapse>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label>
              Password
            </label>
            <label>
              Forget password?
            </label>
          </div>
          <TextField
            fullWidth
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <Checkbox defaultChecked color="default" />
            <div style={{ display: "flex", alignItems: "center" }}>
              {createAccount ?
                <Typography >I accept terms and conditions</Typography>
                :
                <Typography >Remmember Password</Typography>
              }
            </div>
          </div>
        <Collapse in={error !== ""}>
        <div style={{ display: "flex" }}>
          <Typography color="error" style={{ margin: '16px 0' }}>{error}</Typography>
        </div>
        </Collapse>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            {createAccount ? "Sign Up" : "Sign In"}
          </Button>
          <div style={{ display: "flex" }}>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '16px' }}>{createAccount ? `Already have an account?` : `Don't have an account`}</Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '16px', cursor: "pointer" }}>
              <a onClick={() => setcreateAccount(prev => !prev)}>&nbsp; {createAccount ? 'Login' : 'Create Account?'}</a>
            </Typography>
          </div>
        </form>
      </Box>
  );
};

export default Login;
