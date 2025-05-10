import './output.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "./components/Layout/Layout";
import Tabs from './components/UI/Tabs';
import { ThemeProvider } from './context/ThemeContext';


function App() {

  return (
    <ThemeProvider>
      <Layout>
        <Tabs />
      </Layout>
    </ThemeProvider>
  );
}

export default App;