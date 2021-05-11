import GitHubButton from 'react-github-btn';

import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.git}>
        <GitHubButton
          href="https://github.com/mityaua/exponent-calculator/issues"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-issue-opened"
          data-show-count="true"
          aria-label="Issue mityaua/exponent-calculator on GitHub"
        >
          Issue
        </GitHubButton>
      </div>

      <div className={s.copy}>
        <p className={s.text}>Developed by</p>

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
      </div>
    </footer>
  );
}
