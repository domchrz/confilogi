import './Button.scss';

export default function Button({ children, mode = 'primary', width = 'null' }) {
  return (
    <button className={`btn btn--${mode}`} style={{ width }}>
      {children}
    </button>
  );
}
