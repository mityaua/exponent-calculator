import PropTypes from 'prop-types';
import { useState } from 'react';

import { TextField, ButtonGroup, Button } from '@material-ui/core';

import s from './Form.module.scss';

interface IProps {
  onSubmit: (result: string, param?: string) => void;
}

interface IState {
  num: string;
  exponent: string;
}

const initialState: IState = {
  num: '',
  exponent: '',
};

// Form component
export default function Form({ onSubmit }: IProps) {
  const [state, setState] = useState<IState>(initialState);
  const { num, exponent } = state;

  // Inputs handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit func
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = Math.pow(Number(num), Number(exponent));

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
          name="num"
          value={num}
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
            disabled={!num || !exponent}
          >
            Calculate
          </Button>

          {(num !== '' || exponent !== '') && (
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
