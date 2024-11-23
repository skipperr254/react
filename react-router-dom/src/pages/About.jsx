// import { Typography } from "@mui/material"

// const About = () => {
//     return (
//         <Typography variant="h3">About Page</Typography>
//     )
// }
// export default About

import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is a simple React app demonstrating Material UI and React Router.
      </Typography>
    </Container>
  );
};

export default About;
