import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" size="large" color="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog hideBackdrop open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ fontSize: '20px' }}>This is my Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '16px' }}>
            A dialog is a popup windoiw which can ask user something like an information or confirmation
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Test;
