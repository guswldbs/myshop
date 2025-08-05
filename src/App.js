import Header from './components/Header';
import ProductCard from './components/ProductCard';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const products = [
    { name: '무선 이어폰', price: 309000, image: '' },
    { name: '태플릿 PC', price: 790000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },
    { name: '스마트 워치', price: 259000, image: '' },


    
  ];

  return (
    <div style={styles.wrapper}>
      <main style={styles.main}>
        <Header />
        <div className="banner-container">
          <img
            src="cellphone.png"
            alt="쇼핑몰배너"
            className="banner-image"
          />
        </div>
        <div className="product-wrapper">
          <div className="product-list">
            {products.map((item, idx) => (
              <ProductCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
};

export default App;

