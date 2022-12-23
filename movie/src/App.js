import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';


// React에서는 App() 함수가 Main 함수
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
