import Button from '../../shared/Button';
import { ChromeLogo, FirefoxLogo, OperaLogo } from '../../svgs/logos';
import './Extensions.scss';

export default function Extensions({ isMobile }) {
  return (
    <section id="extensions" className="extensions">
      <div className="extensions__content">
        <h2>Download the extension</h2>
        <p>
          We&#39;ve got more browsers in the pipeline. Please do let us know if
          you&#39;ve got a favourite you&#39;d like us to prioritize
        </p>
      </div>
      <div
        className={`extensions__downloads ${
          !isMobile ? 'extensions__downloads--desktop' : ''
        }`}
      >
        <div className="extensions__download">
          <ChromeLogo />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <Button width="17rem">Add & Install Extension</Button>
        </div>
        <div className="extensions__download">
          <FirefoxLogo />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <Button width="17rem">Add & Install Extension</Button>
        </div>
        <div className="extensions__download">
          <OperaLogo />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <Button width="17rem">Add & Install Extension</Button>
        </div>
      </div>
    </section>
  );
}
