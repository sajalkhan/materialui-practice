import { Box, Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

const arrOptions = ['Profile', 'Balance', 'Logout'];
const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((elm, indx) => (
            <ListItemButton key={indx} onClick={() => setOpen(false)}>
              <ListItemText primary={elm} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Test;
