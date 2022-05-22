import './App.css';
import Cart from './components/Card';

function App(props) {
  return (
    <div className="App">
        <Cart bgColor="yellow" date="20/05/2022" logo="https://pngimg.com/uploads/amazon/amazon_PNG5.png" button="Case Study" title1="Amazone Gift" title2="Pay" mode="Desktop-mobile" arrow="	&#8594;" />

        <Cart bgColor="yellow" date="20/05/2022" logo="https://pngimg.com/uploads/amazon/amazon_PNG5.png" button="Case Study" title1="Amazone Gift" title2="Pay" mode="Desktop-mobile" arrow="	&#8594;" />

        <Cart bgColor="white" date="20/05/2022" logo="http://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png" button="Case Study" title1="Apple Gift" title2="Payment" mode="Desktop-mobile" arrow="	&#8594;" />
    </div>
  );
}

export default App;
