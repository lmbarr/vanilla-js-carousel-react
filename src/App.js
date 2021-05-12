import logo from './logo.svg';
import './App.css';
import CustomCarousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <CustomCarousel>
        <img className="gallery-item gallery-item-1" src="http://fakeimg.pl/300/?text=1" data-index="1"/>
        <img className="gallery-item gallery-item-2" src="http://fakeimg.pl/300/?text=2" data-index="2"/>
        <img className="gallery-item gallery-item-3" src="http://fakeimg.pl/300/?text=3" data-index="3"/>
        <img className="gallery-item gallery-item-4" src="http://fakeimg.pl/300/?text=4" data-index="4"/>
        <img className="gallery-item gallery-item-5" src="http://fakeimg.pl/300/?text=5" data-index="5"/>
      </CustomCarousel>
    </div>
  );
}

export default App;
