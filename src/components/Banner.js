import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#264653",
        color: "#e9c46a",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ letterSpacing: "0.25rem", textTransform: "uppercase" }}
      >
        Random Password Generator
      </Typography>
      <Typography component="h2" variant="h5" gutterBottom>
        Quickest way to generate a super secure unbreakable password!
      </Typography>
    </Box>
  );
};
