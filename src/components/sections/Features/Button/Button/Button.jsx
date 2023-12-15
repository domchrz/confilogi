import './Button.scss';

export default function Button({ children, isActive = false, isMobile = true, ...props }) {
  return (
    <button
      {...props}
      className={`features__btn ${isActive ? 'features__btn--active' : ''} ${
        !isMobile ? 'features__btn--desktop' : ''
      }`}
    >
      {children}
    </button>
  );
}
