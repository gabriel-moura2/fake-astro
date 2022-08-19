import { Link } from '@mui/material';

const AppButtonLink = props => {
	return <Link variant="inherit" color="inherit" href={props.href}>{props.value}</Link>
}

export default AppButtonLink;