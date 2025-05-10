import './output.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import Tabs from './components/UI/Tabs';


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