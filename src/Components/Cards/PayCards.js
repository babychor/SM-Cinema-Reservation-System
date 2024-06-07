import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utillss";
import styles from "./stylesss.css";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
    amount: "",
    showHomeButton: false
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData, showHomeButton: true, amount: "" }); // Reset amount here
    this.form.reset();
  };

  handleHomeClick = () => {
    window.location.href = "/home"; // Adjust the URL as needed
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData, amount, showHomeButton } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>Payment Form</h1>
          <h4>Enter Your Details and The Amount</h4>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            amount = {amount}
            focused={focused}
            callback={this.handleCallback}
            className="credit-card" 
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="amount"
                className="form-control"
                placeholder="₱ Amount" 
                value={amount}
                onChange={this.handleAmountChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn-pay">PAY</button>
              {showHomeButton && (
                <button 
                  type="button"
                  className="btn-home" 
                  onClick={this.handleHomeClick}
                >
                  Home
                </button>
              )}
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
