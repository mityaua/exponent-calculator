import PropTypes from 'prop-types';
import { useState } from 'react';

import { TextField, ButtonGroup, Button } from '@material-ui/core';

import s from './Form.module.scss';

const initialState = {
  number: '',
  exponent: '',
};

// Form component
export default function Form({ onSubmit }) {
  const [state, setState] = useState(initialState);
  const { number, exponent } = state;

  // Inputs handler
  const handleChange = e => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit func
  const handleSubmit = e => {
    e.preventDefault();

    const result = Math.pow(number, exponent);

    const normalizedResult = new Intl.NumberFormat('en-En', {
      maximumSignificantDigits: 20,
    }).format(result);

    onSubmit(normalizedResult);
  };

  // Form reset func
  const resetForm = () => {
    setState(initialState);
    onSubmit('', '');
  };

  return (
    <div className={s.container}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Number"
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          id="number"
          color="primary"
          autoFocus
          required
        />

        <br />
        <br />

        <TextField
          label="Exponent"
          type="number"
          name="exponent"
          value={exponent}
          onChange={handleChange}
          id="exponent"
          color="secondary"
          required
        />

        <br />
        <br />

        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            title="Calculate result"
            aria-label="Calculate result"
            disabled={!number || !exponent}
          >
            Calculate
          </Button>

          {(number !== '' || exponent !== '') && (
            <Button
              onClick={resetForm}
              title="Reset result"
              aria-label="Reset result"
            >
              Reset
            </Button>
          )}
        </ButtonGroup>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
