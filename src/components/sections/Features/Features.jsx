import Button from './Button/Button';
import './Features.scss';
import Bookmarking from './Bookmarking';
import Searching from './Searching';
import Sharing from './Sharing';
import useSelector from '../../../hooks/useSelector';
import useDispatch from '../../../hooks/useDispatch';

export default function Features({ isMobile }) {
  const areTabsActive = useSelector((state) => state.features);
  const dispatch = useDispatch();

  const setTabActive = (tabName) => {
    dispatch({
      type: 'UPDATE_FEATURES',
      payload: {
        feature: tabName,
        bool: true,
      },
    });
  };

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
            isActive={areTabsActive.bookmarking}
            onClick={() => setTabActive('bookmarking')}
          >
            Simple Bookmarking
          </Button>
          <Button
            isActive={areTabsActive.searching}
            onClick={() => setTabActive('searching')}
          >
            Speedy Searching
          </Button>
          <Button
            isActive={areTabsActive.sharing}
            onClick={() => setTabActive('sharing')}
          >
            Easy Sharing
          </Button>
        </div>
      </div>
      <div className="features__tabs">
        {areTabsActive.bookmarking ? (
          <Bookmarking isMobile={isMobile} />
        ) : areTabsActive.searching ? (
          <Searching isMobile={isMobile} />
        ) : areTabsActive.sharing ? (
          <Sharing isMobile={isMobile} />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
