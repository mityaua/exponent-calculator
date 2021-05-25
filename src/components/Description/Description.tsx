import s from './Description.module.scss';

export default function Description() {
  return (
    <div className={s.container}>
      <h2>What is an exponent?</h2>

      <p>
        Exponentiation is a mathematical operation, written as{' '}
        <b>
          a<sup>n</sup>
        </b>
        , involving the base <b>a</b> and an exponent <b>n</b>.
      </p>

      <p>
        In the case where <b>n</b> is a positive integer, exponentiation
        corresponds to repeated multiplication of the base, <b>n</b> times.
      </p>
    </div>
  );
}
