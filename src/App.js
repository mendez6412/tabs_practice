import React, { Component } from 'react';
import './App.css';
import { populateTabs, setActiveTab } from './actions';
import Tab from './components/Tab';
import { getRandomInt } from './utilities';
import { connect } from 'react-redux'

class App extends Component {

  _populate = () => {
    let quantity = getRandomInt(2, 6);
    fetch("https://swapi.co/api/people/")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let people = json.results.slice(0, quantity)
      people.forEach((person, index) => {
        person.isActive = index === 0;
      })
      this.props.populateTabs(people);
    })
  }

  _displayTabs = () => {
    return this.props.tabs.map((tab, index) => 
      <div key ={index}>
        <Tab tabData = {tab} index = {index} setActiveTab = {this.props.setActiveTab}/>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {Object.keys(this.props.tabs).length === 0 ?
          <button className="populateButton" onClick={this._populate}>Hello</button>
          :
          <div className="tabs">
            {this._displayTabs()}
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    tabs: state.tabValues.tabs 
  }
}

const mapDispatchToProps = {
  populateTabs,
  setActiveTab
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
