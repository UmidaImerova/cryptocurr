import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import storeCoinList from './store/storeCoinList';
import storeTopCoin from './store/storeTopCoin';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeTopCoin} topCrypto={ storeCoinList}>
      <Router>
        <App />
      </Router>
    </Provider>
   
  </React.StrictMode>
);


