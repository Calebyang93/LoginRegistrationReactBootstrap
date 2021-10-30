import React, { Component } from "react";

class FormComponent extends Component {
  state = {
    stringVal: "",
    isValid: false
  };

  stringValPatternValidation = stringVal => {
    return /\s/g.test(stringVal);
  };

  changestringVal = event => {
    const { value } = event.target;
    const isValid = this.stringValPatternValidation(value);

    this.setState({
      stringVal: value,
      isValid
    });

    console.log(this.stringValPatternValidation(value))
  };

  onSubmit = () => {
    const { stringVal } = this.state;
    console.log("Val: ", stringVal);
  };

  render() {
    const { isValid, stringVal } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            name="stringVal"
            value={stringVal}
            onChange={this.changestringVal}
          />
          {this.state.isValid && (
            <div style={{ color: "#F61C04" }}>White or empty space is not allowed.</div>
          )}
          <button onClick={this.onSubmit}>Store</button>
        </form>

      </div>
    );
  }
}

export default FormComponent;