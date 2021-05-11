import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.copy}>Developed by</p>

      <a
        href="https://github.com/mityaua"
        target="_blank"
        aria-label="Github profile"
        title="Github profile"
        rel="noreferrer noopener"
        className={s.link}
      >
        <span role="img" aria-label="frog">
          🐸
        </span>
      </a>
    </footer>
  );
}
