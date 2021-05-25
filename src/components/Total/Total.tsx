import s from './Total.module.scss';

interface IProps {
  total: string;
}

export default function Total({ total }: IProps) {
  return total ? (
    <div className={s.container}>
      <h2 className={s.result}>Result:</h2>

      <span className={s.total}>{total}</span>
    </div>
  ) : null;
}
