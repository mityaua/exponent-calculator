import PropTypes from 'prop-types';

import s from './Total.module.scss';

export default function Total({ total }) {
  return (
    total && (
      <div className={s.container}>
        <h2 className={s.result}>Result:</h2>

        <span className={s.total}>{total}</span>
      </div>
    )
  );
}

Total.defaultProps = {
  total: null,
};

Total.propTypes = {
  total: PropTypes.string,
};
