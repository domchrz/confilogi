import Header from './components/layout/Header';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Extensions from './components/sections/Extensions';
import Faq from './components/sections/Faq';
import Features from './components/sections/Features';
import Newsletter from './components/sections/Newsletter';
import MatchMedia from './components/shared/MatchMedia';

export default function App() {
  return (
    <div>
      <Layout>
        <MatchMedia>
          {(isMobile) => (
            <>
              <Navbar isMobile={isMobile} />
              <Header isMobile={isMobile} />
              <Features isMobile={isMobile} />
              <Extensions isMobile={isMobile}/>
              <Faq/>
              <Newsletter />
            </>
          )}
        </MatchMedia>
      </Layout>
    </div>
  );
}
