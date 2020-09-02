import React, {useEffect, useState, Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './redux/store';
import {setPizzas} from './redux/actions/pizzas';
import {Route} from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

// function App() {
 
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas);
//         }) 
//     }, []);

//     return (
//         <div className="wrapper">
//             <Header />
//             <div className="content">
//                 <Route exact path='/' render={() => <Home items={pizzas}/>} />
//                 <Route exact path='/cart' component={Cart} />
//             </div>
//         </div>
//     );
// }


class App extends Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas);
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route exact path='/' render={() => <Home items={this.props.items}/>} />
                    <Route exact path='/cart' component={Cart} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);