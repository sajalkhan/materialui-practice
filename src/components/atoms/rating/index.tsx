import { Box, Rating, Typography } from '@mui/material';
import { useState } from 'react';

const Test = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Rating precision={0.1} size="large" value={value} onChange={(e, val) => setValue(val || 0)} />
      <Typography>Rated {value !== undefined ? value : 0} Stars</Typography>
    </Box>
  );
};

export default Test;
