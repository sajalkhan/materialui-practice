import Button from '@mui/material/Button';

export const Buttons = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('click button');
  };

  return (
    <div>
      <Button
        variant="contained"
        className="myButton"
        onClick={handleClick}
        color="success"
        fullWidth={false}
        size="large"
      >
        Success
      </Button>

      <Button onClick={handleClick} color="error" sx={{ margin: 3 }} size="medium" variant="outlined">
        Second
      </Button>
      <Button onClick={handleClick} color="info" sx={{ margin: 3 }} size="small" variant="text">
        Third
      </Button>
    </div>
  );
};
