import './App.scss';
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="app" id="app">
      <Layout>
        <Navbar />
      </Layout>
    </div>
  );
}
