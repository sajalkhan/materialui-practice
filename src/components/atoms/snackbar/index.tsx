import { Alert, Box, Snackbar } from '@mui/material';
import { useState } from 'react';

const Test = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Snackbar onClose={() => setOpen(false)} autoHideDuration={2000} open={open}>
        <Alert severity="success">This is a sucess message</Alert>
      </Snackbar>
    </Box>
  );
};

export default Test;
