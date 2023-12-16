import './Button.scss';

export default function Button({ children, ...props }) {
  return (
    <button {...props} className={"popup__btn"}>
      {children}
    </button>
  );
}
