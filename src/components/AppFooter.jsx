import * as React from 'react';
import { Box, AppBar, Container, Typography, Link, SvgIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const AppFooter = () => {
	return (
		<Box component="footer">
			<AppBar sx={{ top: 'auto', bottom: 0, bgcolor: 'background.paper', py: 2 }} position="static">
				<Container>
					<Typography variant="h6" align="right" color="text.secondary" gutterBottom>
						<Link href="https://github.com/gabriel-moura2/fake-astro">
							Github <GitHubIcon />
						</Link>
					</Typography>
				</Container>
			</AppBar>
		</Box>
	)
}

export default AppFooter;