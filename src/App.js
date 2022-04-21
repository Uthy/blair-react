import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/PortfolioPage';
import SinglePortfolio from './pages/portfolio/SinglePortfolio';
import ScrollToTop from "./components/ScrollToTop";
import Error404 from "./pages/Error404";
import AnimateRoute from "components/AnimateRoute";

function App() {
  return (
    <Router>
    <Header/>
    <ScrollToTop/>
      <div className="page-body">
        <AnimateRoute>
          <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About/>} exact/>
              <Route path="/portfolio" element={<Portfolio/>} exact/>
              <Route path="/portfolio/:name" element={<SinglePortfolio/>} exact/>
              <Route path="*" element={<Error404/>} />
          </Routes>
          </AnimateRoute>
      </div>
    <Footer/>
    </Router>
  );
}

export default App;
