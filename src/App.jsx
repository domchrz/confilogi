import './App.scss';
import Navbar from './components/layout/Navbar';
import Button from './components/shared/Button';
import MatchMedia from './components/shared/MatchMedia';
import {
  ArrowIcon,
  CloseIcon,
  FacebookIcon,
  HamburgerIcon,
  TwitterIcon,
} from './components/svgs/icons';
import AlertIcon from './components/svgs/icons/Alert/Alert';
import {
  FeaturesTab1,
  FeaturesTab2,
  FeaturesTab3,
  HeroPicture,
} from './components/svgs/illustrations';
import {
  BookmarkLogo,
  ChromeLogo,
  FirefoxLogo,
  OperaLogo,
} from './components/svgs/logos';

export default function App() {
  return (
    <div className="app" id="app">
      <Navbar />
      <header>
        <h1>Hello App!</h1>
      </header>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        padding: '1rem',
        backgroundColor: 'white'
      }}>
        <Button>Get it on Chrome</Button>
        <Button mode="secondary">Get it on Firefox</Button>
        <Button mode="action">Get it on Opera</Button>
      </div>
      <p>Welcome to the app</p>
      <div>
        <AlertIcon />
        <ArrowIcon />
        <CloseIcon />
        <FacebookIcon />
        <HamburgerIcon />
        <TwitterIcon />
        <BookmarkLogo isMobileMenu={true} />
      </div>
      <FeaturesTab1 />
      <FeaturesTab2 />
      <FeaturesTab3 />
      <HeroPicture />
      <MatchMedia>
        {(isMobile) => (
          <>
            {isMobile ? (
              <>
                <ChromeLogo />
                <OperaLogo />
                <FirefoxLogo />
              </>
            ) : (
              <BookmarkLogo />
            )}
          </>
        )}
      </MatchMedia>
    </div>
  );
}
