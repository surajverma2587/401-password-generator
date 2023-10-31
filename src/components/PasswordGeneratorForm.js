import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as Yup from "yup";

export const PasswordGeneratorForm = ({ onSuccess }) => {
  const validateCheckbox = (value) => {
    const keys = ["isLowercase", "isUppercase", "isNumeric", "isSymbol"];

    const valuesArray = keys.map((key) => {
      return formik.values[key];
    });

    const filteredArray = valuesArray.filter((e) => e);

    return filteredArray.length >= 2;
  };

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
    isLowercase: Yup.boolean().test("isLowercase", validateCheckbox),
    isUppercase: Yup.boolean().test("isUppercase", validateCheckbox),
    isNumeric: Yup.boolean().test("isNumeric", validateCheckbox),
    isSymbol: Yup.boolean().test("isSymbol", validateCheckbox),
  });

  const onSubmit = (values) => {
    onSuccess(values);
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
              error={
                !!formik.errors.passwordLength && formik.touched.passwordLength
              }
              helperText={
                formik.touched.passwordLength && formik.errors.passwordLength
              }
            />

            <Stack spacing={2}>
              <Box>
                <Typography component="h3" variant="subtitle1" gutterBottom>
                  Password Criteria
                </Typography>

                <Divider />
              </Box>
              <FormGroup>
                <FormControl
                  required
                  error={true}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend" sx={{ fontSize: "12px" }}>
                    Pick two
                  </FormLabel>
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
                              sx={{
                                color:
                                  formik.touched.isLowercase &&
                                  formik.errors.isLowercase
                                    ? "#d32f2f"
                                    : undefined,
                              }}
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
                              sx={{
                                color:
                                  formik.touched.isUppercase &&
                                  formik.errors.isUppercase
                                    ? "#d32f2f"
                                    : undefined,
                              }}
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
                              sx={{
                                color:
                                  formik.touched.isNumeric &&
                                  formik.errors.isNumeric
                                    ? "#d32f2f"
                                    : undefined,
                              }}
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
                              sx={{
                                color:
                                  formik.touched.isSymbol &&
                                  formik.errors.isSymbol
                                    ? "#d32f2f"
                                    : undefined,
                              }}
                            />
                          }
                          label="Symbols"
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                </FormControl>
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
