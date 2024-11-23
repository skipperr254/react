// import { Typography, Container } from "@mui/material"

// const Home = () => {
//     return (
//         <Container>
//             <Typography variant="h3">Home page</Typography>
//         </Container>
//     )
// }

// export default Home

import { Typography, Container, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Button variant="contained" color="primary">
        Go to About
      </Button>
    </Container>
  );
};

export default Home;
