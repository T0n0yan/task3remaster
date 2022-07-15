import "./Components/assets/Styles/global.scss";
import FirstPage from "./Components/FirstPage/index";
import SecondPage from "./Components/SecondPage";
import Title from "./Components/Title";
import Footer from "./Components/Footer/index";
import Nav from "./Components/Navigate";
import MainTitle from './Components/mainTitle/index';

function App() {
  return (
    <div className="App">

      <Nav />
      <MainTitle className='G_Container' />
      <Title text="Featured" />
      <FirstPage className="G_Container" />
      <Title text="All Stories" />
      <SecondPage className="G_Container" />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
