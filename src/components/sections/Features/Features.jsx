import { useState } from 'react';
import Button from './Button/Button';
import './Features.scss';
import Bookmarking from './Bookmarking';
import Searching from './Searching';
import Sharing from './Sharing';

const setTabActive = (tabName) => {
  const newState = {
    bookmarking: false,
    searching: false,
    sharing: false,
  };

  newState[tabName] = true;

  return newState;
};

export default function Features({ isMobile }) {
  const [activeTab, setActiveTab] = useState({
    bookmarking: true,
    searching: false,
    sharing: false,
  });

  return (
    <section
      id="features"
      className={`features features--${isMobile ? 'mobile' : 'desktop'}`}
    >
      <div className="features__nav">
        <div className="features__nav-content">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access on the go.
          </p>
        </div>
        <div className="features__nav-button-wrapper">
          <Button
            isActive={activeTab.bookmarking}
            onClick={() => setActiveTab(setTabActive('bookmarking'))}
          >
            Simple Bookmarking
          </Button>
          <Button
            isActive={activeTab.searching}
            onClick={() => setActiveTab(setTabActive('searching'))}
          >
            Speedy Searching
          </Button>
          <Button
            isActive={activeTab.sharing}
            onClick={() => setActiveTab(setTabActive('sharing'))}
          >
            Easy Sharing
          </Button>
        </div>
      </div>
      <div className="features__tabs">
        {activeTab.bookmarking ? (
          <Bookmarking isMobile={isMobile} />
        ) : activeTab.searching ? (
          <Searching isMobile={isMobile} />
        ) : activeTab.sharing ? (
          <Sharing isMobile={isMobile} />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
