// import { Typography } from "@mui/material"

// const Contact = () => {
//     return (
//         <Typography variant="h3">Contact Page</Typography>
//     )
// }

// export default Contact


import { Typography, Container, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
        Send Message
      </Button>
    </Container>
  );
};

export default Contact;
