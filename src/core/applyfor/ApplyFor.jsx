import { Box } from "@mui/material";
import ApplyInputs from "./ApplyInputs";



function ApplyFor() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(180deg, #42D2B8 0%, #425DD2 83.36%)",
        minwidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
       <ApplyInputs/>
    </Box>
  );
}

export default ApplyFor;