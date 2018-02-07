import React, {Component} from 'react';
import './App.css';
import Header from '../components/header/Header';
import Filter from '../components/body/Filter';

class App extends Component {

    onStockComboChanged = (value, event) => {
        console.log("Combo value changed");
    };

     render() {
        const stockValues = [{
            "value": "Stock1"
        }, {
            "value": "Stock2"
        }];

        return (
            <div className="App">
                <Header />
                <Filter
                    values = {stockValues}
                    name = "Select stock"
                    onChanged = {this.onStockComboChanged}
                />
            </div>
        );
    }
}

export default App;
