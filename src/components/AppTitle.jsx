import { Typography } from '@mui/material';

const AppTitle = props => {
	return (
		<Typography sx={{my: 10, mx: 3}} color="white" variant="h4" {...props}>
			{props.children}
		</Typography>
	)
}

export default AppTitle;