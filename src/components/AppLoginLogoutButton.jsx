import { Button } from '@mui/material';

const AppLoginLogoutButton = (props) => {
   if (props.login) {
      return <Button color="secondary" variant="contained" href="/login">Login</Button>;
   } else {
      return (
         <Button color="secondary" variant="contained" onClick={(e) => props.onLogout(e)}>Logout</Button>
      );
   }
};

export default AppLoginLogoutButton;