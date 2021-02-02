import React, { Component } from 'react';
import Rows from './components/Rows';
import Headings from './components/Headings';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    
    setInterval(async () => {
      const url = 'http://openlibrary.org/recentchanges.json?limit=10';
    
      await fetch(url)
        .then(response => response.json())
        .then(formatData => this.formatData(formatData))
        .then(forma => console.log(forma))
        .then(result => this.setState({
          data : result
        }) )
    }, 1000);
  }

  formatData(data) {
    return data.map((data, id) => {
      return {
        "when": data.timestamp,
        "who": data.author.key,
        "description": data.comment
      }
    });
  }

  render() {
    return (
      <div className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table table-bordered">
          <Headings headings={this.props.headings} />
          <Rows data={this.props.data} />
        </table>
      </div>
    );
  }
}

export default App;