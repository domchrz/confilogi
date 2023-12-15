import './Button.scss';

export default function Button({ children, mode = 'primary', width = 'null', ...props }) {
  return (
    <button {...props} className={`btn btn--${mode}`} style={{ width }}>
      {children}
    </button>
  );
}
