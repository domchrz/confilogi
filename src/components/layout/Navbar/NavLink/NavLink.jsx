import './NavLink.scss';

export default function NavLink({
  children,
  onClick = () => {},
  href = '',
  isMobile = true,
  isLoginLink = false,
}) {
  return (
    <a
      className={`nav__link nav__link--${isMobile ? 'mobile' : 'desktop'} ${
        isLoginLink ? 'nav__link--login' : ''
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      href={href}
    >
      {children}
    </a>
  );
}
