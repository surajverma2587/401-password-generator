import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export const DisplayPassword = ({ password }) => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h4">{password}</Typography>
        </Paper>
      </Container>
    </Box>
  );
};
