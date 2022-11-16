import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from '../robots.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundaries";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('1')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
            return response.json();
        })
            .then(users => { this.setState({ robots: users }) });
        // console.log('2')
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);

        // console.log(filteredRobots);

    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        })
        if (!this.state.robots.length) {
            return <h1 className="tc"> Loading...</h1>
        }
        else {
            return (
                <div className="tc" >

                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry >
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry >

                    </Scroll>



                </div >
            );
        }
        // console.log('3')

    }
}


export default App;