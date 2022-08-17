import { Link } from '@mui/material';

const AppButtonLink = props => {
	return <Link component="button" variant="h5" color="inherit" onClick={props.onClick}>{props.value}</Link>
}

export default AppButtonLink;