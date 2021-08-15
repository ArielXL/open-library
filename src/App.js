import React, { Component } from 'react';
import Rows from './components/Rows';
import Headings from './components/Headings';

class App extends Component {

  state = {
    data : []
  }

  componentDidMount() {
    setInterval(async () => {
      const users = '15';
      const url = `http://openlibrary.org/recentchanges.json?limit=${users}`;

      const response = await fetch(url);
      const data_json = await response.json();

      const formatData = this.formatData(data_json);
      this.setState({ data: formatData });
    }, 1000);
  }

  getFormatDate(date) {
    var today = new Date();

    var date_year = date.substring(0, 4);
    var date_month = date.substring(5, 7);
    var date_day = date.substring(8, 10);
    var date_hour = date.substring(11, 13);
    var date_minute = date.substring(14, 16);
    var date_second = date.substring(17, 19);

    var new_today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds());
    var new_date = new Date(date_year, date_month, date_day, date_hour, date_minute, date_second);
    var seconds = (Math.abs(new_today - new_date) / 1000);

    return seconds + ' seconds ago';
  }

  formatData(data) {
    return data.map((data, id) => {
      return {
        "when": this.getFormatDate(data.timestamp),
        "who": data.author.key.substring(8),
        "description": data.comment.toUpperCase()
      }
    });
  }

  render() {
    return (
      <div className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table table-bordered">
          <Headings headings={this.props.headings} />
          <Rows data={this.state.data} />
        </table>
      </div>
    );
  }
}

export default App;