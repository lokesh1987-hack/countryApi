import axios from "axios";
import React from "react";
import "./styles.css";

class Api extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      arr: []
    };
  }
  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(
      (posRep) => {
        this.setState({ arr: posRep.data });
      },
      (errRep) => {
        console.log(errRep);
      }
    );
  }

  render() {
    return (
      <div>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>S/n</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Calling Code</th>
              <th>Alternate Spellings</th>
              <th>Languages</th>
              <th>Flags</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arr.map((Element, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{Element.name}</td>
                <td>{Element.capital}</td>
                <td>{Element.callingCodes}</td>
                <td>{Element.altSpellings}</td>
                <td>
                  {Element.languages.map((ele) => (
                    <div>{ele.name}</div>
                  ))}
                </td>
                <td>
                  <div className="flag">
                    <img src={Element.flag} alt="{Element.name}" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Api;
