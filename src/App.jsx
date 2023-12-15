import './App.scss';
import Header from './components/layout/Header';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Extensions from './components/sections/Extensions';
import Features from './components/sections/Features';
import MatchMedia from './components/shared/MatchMedia';

export default function App() {
  return (
    <div className="app" id="app">
      <Layout>
        <MatchMedia>
          {(isMobile) => (
            <>
              <Navbar isMobile={isMobile} />
              <Header isMobile={isMobile} />
              <Features isMobile={isMobile} />
              <Extensions isMobile={isMobile}/>
            </>
          )}
        </MatchMedia>
      </Layout>
    </div>
  );
}
