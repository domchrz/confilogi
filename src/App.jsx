import './App.scss';
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
    <div className="app">
      <header>
        <h1>Hello App!</h1>
      </header>
      <p>Welcome to the app</p>
      <div>
        <AlertIcon />
        <ArrowIcon />
        <CloseIcon />
        <FacebookIcon />
        <HamburgerIcon />
        <TwitterIcon />
      </div>
      <FeaturesTab1 />
      <FeaturesTab2 />
      <FeaturesTab3 />
      <HeroPicture />
      <BookmarkLogo />
      <ChromeLogo />
      <FirefoxLogo />
      <OperaLogo />
    </div>
  );
}
