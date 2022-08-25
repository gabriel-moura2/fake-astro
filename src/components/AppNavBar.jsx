import * as React from 'react';
import { pink } from '@mui/material/colors';
import { Box, AppBar, Toolbar, Avatar, Typography } from '@mui/material';
import AppLoginLogoutButton from './AppLoginLogoutButton';

const AppNavBar = props => {
	const LogoIcon = () => (
		<Avatar sx={{ bgcolor: pink[500] }} component="a" href='/'>
			<Typography variant="h3" sx={{ fontFamily: 'Seaweed Script, cursive' }}>
				F
			</Typography>
		</Avatar>
	)
	
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar>
				<Toolbar>
				<Avatar component="a" href="/" alt="Fake Astro" src="/logo.png" sx={{ width: 56, height: 56 }}/>
				<Typography variant="h4" component="div"  sx={{ flexGrow: 1, ml: 3, fontFamily: 'Yellowtail, cursive' }}>
						Fake Astro
				</Typography>
				<AppLoginLogoutButton login={!props.userLogged}
               onLogout={props.logoutFunction} />
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default AppNavBar;