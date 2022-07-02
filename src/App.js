import logo from './logo.svg';
import  styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CategoryPanel from './components/CategoryPanel';
import SearchBar from './components/SearchBar';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div class={styles.main}>
    <Navbar />
    <SearchBar />
    <div class={styles.carouselCategorySection}>
    <div class={styles.carouselCategory}>
    <Carousel />
    <CategoryPanel />
    </div>
    </div>

    <ProductSection section="All Products" />
    <ProductSection section="Laptops" />
    <ProductSection section="Mobile Phones" />

    <Footer />

    </div>
  );
}

export default App;
