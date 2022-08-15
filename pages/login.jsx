import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = (props) => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push({'pathname': '/', 'query': {'user': name, 'hash': 123}});
	}
	
	return (
	<Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
				value={name}
				margin="normal"
				required
				fullWidth
				label="Username"
				autoComplete="username"
				autoFocus
				onChange={(e) => setName(e.target.value)}
            />
            <TextField
				value={password}
	            margin="normal"
	            required
	            fullWidth
	            label="Password"
	            type="password"
	            autoComplete="current-password"
				onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
				type="submit"
            	fullWidth
            	variant="contained"
            	sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
	)
}

export default Login;