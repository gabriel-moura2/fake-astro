import React, {useState} from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@mui/material';

const Login = (props) => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push({'pathname': '/', 'query': {'user': name, 'hash': 123}});
	}
	
	return (
		<div>
			<Head>
				<title>Fake Astro - Login</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Container component="main" maxWidth="xs" sx={{mt: 16}}>
		        <Box
		          sx={{
		            display: 'flex',
		            flexDirection: 'column',
		            alignItems: 'center',
		          }}
		        >
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
		</div>
	)
}

export default Login;