import './Searching.scss';
import { FeaturesTab2 } from '../../../svgs/illustrations';
import Button from '../../../shared/Button';

export default function Searching({ isMobile }) {
  return (
    <div className={`searching searching--${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="searching__tab-picture">
        <FeaturesTab2 width={isMobile ? '100%' : 'auto'} />
      </div>
      <div className="searching__content">
        <div className="searching__content-card">
          <h3>Searching at lightspeed</h3>
          <div>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
          {!isMobile && <Button width="9rem">More info</Button>}
        </div>
      </div>
    </div>
  );
}
