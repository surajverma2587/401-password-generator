import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export const PasswordGeneratorForm = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
          }}
        >
          <Stack component="form" spacing={2}>
            <TextField
              label="Password Length"
              variant="outlined"
              type="number"
            />

            <Stack spacing={2}>
              <Box>
                <Typography component="h3" variant="subtitle1" gutterBottom>
                  Password Criteria
                </Typography>

                <Divider />
              </Box>
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Stack>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Lowercase"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Uppercase"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Numeric"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Symbols"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </FormGroup>
            </Stack>

            <Button variant="contained" color="success">
              Generate
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
