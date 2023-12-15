import './Button.scss';

export default function Button({ children, ...props }) {
  return (
    <button {...props} className={"nav__btn"}>
      {children}
    </button>
  );
}
