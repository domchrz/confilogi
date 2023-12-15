import './Sharing.scss';
import { FeaturesTab3 } from '../../../svgs/illustrations';
import Button from '../../../shared/Button';

export default function Sharing({ isMobile }) {
  return (
    <div
      className={`sharing sharing--${isMobile ? 'mobile' : 'desktop'}`}
    >
      <div className="sharing__tab-picture">
        <FeaturesTab3 width={isMobile ? '100%' : 'auto'} />
      </div>
      <div className="sharing__content">
        <div className="sharing__content-card">
          <h2>Effortless sharing</h2>
          <div>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          {!isMobile && <Button width="9rem">More info</Button>}
        </div>
      </div>
    </div>
  );
}
