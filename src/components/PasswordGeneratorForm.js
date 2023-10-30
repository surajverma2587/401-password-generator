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
import { useFormik } from "formik";
import * as Yup from "yup";

export const PasswordGeneratorForm = () => {
  const initialValues = {
    passwordLength: "",
    isLowercase: false,
    isUppercase: false,
    isNumeric: false,
    isSymbol: false,
  };

  const validationSchema = Yup.object({
    passwordLength: Yup.number()
      .required("Please enter a valid number.")
      .min(8, "Please enter a password length of minimum 8 characters.")
      .max(100, "Please enter a password length of maximum 100 characters."),
    isLowercase: false,
    isUppercase: false,
    isNumeric: false,
    isSymbol: false,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Box>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
          }}
        >
          <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
            <TextField
              label="Password Length"
              variant="outlined"
              type="number"
              value={formik.values.passwordLength}
              name="passwordLength"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.errors.passwordLength}
              helperText={formik.errors.passwordLength}
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
                        control={
                          <Checkbox
                            checked={formik.values.isLowercase}
                            name="isLowercase"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        }
                        label="Lowercase"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.isUppercase}
                            name="isUppercase"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        }
                        label="Uppercase"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.isNumeric}
                            name="isNumeric"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        }
                        label="Numeric"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formik.values.isSymbol}
                            name="isSymbol"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        }
                        label="Symbols"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </FormGroup>
            </Stack>

            <Button variant="contained" color="success" type="submit">
              Generate
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
