import React from 'react';
import { Cards, Chart, Country } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data: data });

    }

    handleCountryChange = async(e, country) => {
        const data = await fetchData(country);
        this.setState({ data: data, country: country });

    }

    render() {
        const { data, country } = this.state;
        return ( <
            div className = { styles.container } >
            <
            Cards data = { data }
            /> <
            Country handleCountryChange = { this.handleCountryChange }
            /> <
            Chart data = { data }
            country = { country }
            />

            <
            /div>
        )
    }
}
export default App;