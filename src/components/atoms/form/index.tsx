import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Inputs {
  name: string;
  email: string;
  password: string;
  subscribe: boolean;
  age: number | undefined;
  gender: string;
}

const Form: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    name: '',
    email: '',
    password: '',
    subscribe: false,
    age: undefined,
    gender: '',
  });

  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Handling checkboxes separately due to the checked property
    const newValue = type === 'checkbox' ? checked : value;

    setInputs(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<number>) => {
    const { name, value } = e.target;

    setInputs(prevState => ({
      ...prevState,
      [name as string]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(inputs);
  };

  return (
    <div>
      <form className="form-input" onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleTextFieldChange}
          type="text"
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleTextFieldChange}
          type="email"
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleTextFieldChange}
          type="password"
          sx={{ margin: 3 }}
          placeholder="Password"
          variant="filled"
        />

        <FormControlLabel
          style={{ width: 'fit-content' }}
          sx={{ marginLeft: 3 }}
          control={
            <Checkbox
              onChange={() =>
                setInputs(prev => ({
                  ...prev,
                  subscribe: !inputs.subscribe,
                }))
              }
            />
          }
          label="Subscribe To Newsletter"
        />

        <FormControl sx={{ margin: 3 }}>
          <InputLabel>Age</InputLabel>
          <Select name="age" value={inputs.age} label="Age" onChange={() => handleSelectChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginLeft: 3 }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup onChange={handleTextFieldChange} name="gender">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
