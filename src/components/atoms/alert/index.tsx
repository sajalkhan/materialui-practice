import { Alert, Box } from '@mui/material';
import { useState } from 'react';

const Test = () => {
  const [show, setShow] = useState(true);
  return (
    <Box>
      {show && (
        <Alert onClose={() => setShow(false)} severity="info">
          This is an Info Alert
        </Alert>
      )}
    </Box>
  );
};

export default Test;
