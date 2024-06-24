import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function DrForm({ openForm, handleCloseForm, entityName }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(openForm);
  }, [openForm]);

  return (
    <Dialog
      open={open}
      onClose={handleCloseForm}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <DialogTitle id="alert-dialog-title"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{entityName}</DialogTitle>
      <Divider style={{ backgroundColor: 'error', height: '2px', margin: '10px auto', width: '80%' }} />
      <DialogContent>
        <Box>
          <Typography>*Personal Details</Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <TextField label="First Name" variant="standard"   color="success"/>
            <TextField label="Last Name" variant="standard" color="success"/>
            <TextField label="Phone Number" variant="standard" color="success"/>
            <TextField label="Email" variant="standard" color="success"/>
            <TextField label="Website" variant="standard" color="success"/>
          </Stack>
          

          <Typography>*Professional Details</Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <TextField label="Specialization" variant="standard" color="success"/>
            <TextField label="Experience" variant="standard" color="success"/>
            <TextField label="Fee per Consultation" variant="standard" color="success"/>
            <TextField label="Address" variant="standard" color="success"/>
            <TextField type="time" id="time" name="time" variant="standard"/>
          </Stack>

        </Box>
      </DialogContent>
      <Divider style={{ backgroundColor: 'error', height: '2px', margin: '10px auto', width: '100%' }} />
      <DialogActions>
        <Button onClick={handleCloseForm} color="error" variant="contained">
          Cancel
        </Button>
        <Button onClick={""} color="success" variant="contained" autoFocus>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}
