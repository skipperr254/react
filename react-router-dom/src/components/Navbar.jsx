// import { Typography, AppBar, Toolbar, Button } from "@mui/material"
// import { Link } from "react-router-dom"

// const Navbar = () => {
//     return (
//         <AppBar position="sticky">
//             <Toolbar>
//                 <Typography variant="h6" style={{ flexGrow: 1 }}>
//                     The App
//                 </Typography>
//                 <Button color="inherit" to="/" component={Link}>
//                     Home
//                 </Button>
//                 <Button color="inherit" to="/about" component={Link}>
//                     About
//                 </Button>
//                 <Button color="inherit" to="/contact" component={Link}>
//                     Contact
//                 </Button>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Navbar

import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
