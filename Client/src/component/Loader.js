import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const SuspenseLoader = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
        <Typography
          component="span"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "burlywood",
          }}
        >
          Loading....
        </Typography>
      </Box>
    </>
  );
};
export default SuspenseLoader;