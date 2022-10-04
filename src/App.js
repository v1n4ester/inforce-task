import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/components/MainPage';
import { getProductsList } from './components/components/Redux/appReducer';
import store from './components/components/Redux/store';


function App(props) {
  useEffect(()=>{
    props.getProductsList()
}, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps=(state)=>({})

const AppContainer = connect(mapStateToProps, {getProductsList})(App)

const InforceApp = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}

export default InforceApp