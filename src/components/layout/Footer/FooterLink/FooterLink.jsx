import './FooterLink.scss';

export default function FooterLink({
  children,
  onClick = () => {},
  href = '',
  isMobile = true,
}) {
  return (
    <a
      className={`footer__link footer__link--${
        isMobile ? 'mobile' : 'desktop'
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
