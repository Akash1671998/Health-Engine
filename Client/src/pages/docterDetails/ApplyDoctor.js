import {
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import Layout from "../../component/Layout";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DrForm from "../../component/DrForm";
export default function ApplyDoctor() {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };
  return (
    <>
      <Layout>
        <Box display="flex" justifyContent="flex-end">
          <Tooltip title="Lead Upload">
            <IconButton color="error" onClick={() => handleOpenForm()}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <DrForm
          entityName="Doctor Details"
          openForm={openForm}
          handleCloseForm={handleCloseForm}
          handleOpenForm={handleOpenForm}
        />
      </Layout>
    </>
  );
}
