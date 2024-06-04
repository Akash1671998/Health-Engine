import * as React from "react";
import Stack from "@mui/material/Stack";

import { LinearProgress } from "@mui/material";

export default function CustomSpinner() {
  return (
    <Stack sx={{ width: "100%", color: "red",marginTop:'4px' }} spacing={20}>
     <LinearProgress color="error" />
    </Stack>
  );
}
