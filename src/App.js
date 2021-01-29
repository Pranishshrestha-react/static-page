import './App.css';
import Header from './components/header';
import Services from './components/services';
import Banner from './components/banner';

import Bannerd from './components/banner_dark';
import Events from './components/events';
import Form from './components/form';
import Footer from './components/footer';


function App() {
  return(
    <div>
      <Header />
      <Services/>
      <Banner />
      <Bannerd />
      <Events />
      <Form />
      <Footer />
    </div>

  )

}


export default App;
