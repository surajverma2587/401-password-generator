import Stack from "@mui/material/Stack";
import { Banner } from "./components/Banner";
import { PasswordGeneratorForm } from "./components/PasswordGeneratorForm";

export const App = () => {
  return (
    <Stack spacing={2}>
      <Banner />
      <PasswordGeneratorForm />
    </Stack>
  );
};
