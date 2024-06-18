import { Children } from "react";
import Home from "./Home";
import { Box } from "@mui/material";

export default function Layout({ Children }) {
  return (
    <>
      <Box>
        <Box>
        </Box>
        <Box>{Children}</Box>
      </Box>
    </>
  );
}
