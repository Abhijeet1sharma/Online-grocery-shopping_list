import React, { Component } from 'react';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {provider, Provider} from 'react-redux';
import store from './Store';
import ItemModal from './Components/ItemModel';
import {Container} from 'reactstrap';
import {loadUser} from './actions/authActions'


 class App extends Component {
   componentDidMount()
   {
     store.dispatch(loadUser());
   }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
        <ItemModal/>
        
        <ShoppingList/>
        </Container>
      </div>
      </Provider>
    )
  }
}
export default App;