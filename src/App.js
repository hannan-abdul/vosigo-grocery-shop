import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainBanner from './components/Body/MainBanner';
import FoodSectionDetail from './components/Body/FoodSection/FoodSectionDetail';
import AboutVosico from './components/Body/About/AboutVosico';
import CategoriesDetail from './components/Body/Categories/CategoriesDetail';
import ProductCategory from './components/Body/ProductCategory/ProductCategory';
import SupplyChain from './components/Body/SupplyChain/SupplyChain';
import LatestNews from './components/Body/LatestNews/LatestNews';
import Footer from './components/Footer/Footer';
import CarouselItem from './components/Body/CarouselItem/CarouselItem';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainBanner></MainBanner>
      <FoodSectionDetail></FoodSectionDetail>
      <AboutVosico></AboutVosico>
      <CategoriesDetail></CategoriesDetail>
      <ProductCategory></ProductCategory>
      <CarouselItem></CarouselItem>
      <SupplyChain></SupplyChain>
      <LatestNews></LatestNews>
      <Footer></Footer>
    </div>
  );
}

export default App;
