import { Typography } from '@mui/material';

const AppTitle = props => {
	return (
		<Typography sx={{textAlign: 'center', my: 6}} variant="h5">
			{props.children}
		</Typography>
	)
}

export default AppTitle;