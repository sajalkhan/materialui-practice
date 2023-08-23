import { Box, CircularProgress, LinearProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const Test = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <CircularProgress color="secondary" variant="determinate" value={progress} />
      <LinearProgress color="inherit" variant="determinate" value={progress} />
    </Box>
  );
};

export default Test;
