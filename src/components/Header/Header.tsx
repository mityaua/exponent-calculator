import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Exponent calculator</h1>

      <p>Enter values into two of the input fields to solve for the result.</p>
    </header>
  );
}
