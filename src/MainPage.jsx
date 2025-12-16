import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function MainPage() {
  return (
    <div style={{ border: '1px solid black' }}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainPage;