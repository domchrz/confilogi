import './Header.scss';
import { HeroPicture } from '../../svgs/illustrations';
import Button from '../../shared/Button';

export default function Header({ isMobile }) {
  return (
    <div className={`header header--${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="header__content">
        <div className="header__content-card">
          <h1>A Simple Bookmark Manager</h1>
          <div>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="header__button-wrapper">
              <Button>Get it on Chrome</Button>
              <Button mode="secondary">Get it on Firefox</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__hero-picture">
        <HeroPicture width={isMobile ? '100%' : 'auto'} />
      </div>
    </div>
  );
}
