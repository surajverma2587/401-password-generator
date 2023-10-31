import Stack from "@mui/material/Stack";
import { Banner } from "./components/Banner";
import { PasswordGeneratorForm } from "./components/PasswordGeneratorForm";
import { useState } from "react";
import { DisplayPassword } from "./components/DisplayPassword";
import { generateRandomPassword } from "./utils/generateRandomPassword";

export const App = () => {
  const [password, setPassword] = useState("");

  const onSuccess = (values) => {
    const randomPassword = generateRandomPassword(values);
    setPassword(randomPassword);
  };

  return (
    <Stack spacing={2}>
      <Banner />
      <PasswordGeneratorForm onSuccess={onSuccess} />
      {password && <DisplayPassword password={password} />}
    </Stack>
  );
};
