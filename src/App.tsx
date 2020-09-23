import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

 import { Provider } from 'react-redux';
 import Routes from './routes';
 
import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
    <Provider store={store} >
      <Routes />
  
       <GlobalStyle />
    </Provider>
    </Router>
  );
}

export default App;
