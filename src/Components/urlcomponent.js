import React, { Component } from 'react';

class UrlComponent extends Component {
    state= {
        URL: "",
        isTrueVal: false
    };

    urlPatternValidation = URL => {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        return regex.test(URL);
    };

    changeUrl = event => {
        const { value } = event.target;
        const isTrueVal = !value || this.urlPatternValidation(value);

        this.setState({
            URL: value,
            isTrueVal
        });
    };

    onSubmit = () => {
        const { URL } = this.state;
        console.log("Here is the site url: ", URL);
    };

    render() {
        const {isTrueVal, URL } = this.state;
        return (
            <div>
            <form>
            <input
                type="text"
                name="URL"
                value={URL}
                onChange={this.changeUrl}
            />
            {!this.state.isTrueVal && (
                <div style={{ color: "#F61C04" }}>URL is not valid.</div>
            )}
            <button onClick={this.onSubmit} disabled={!isTrueVal}>Store</button>
            </form>
      </div>
        );
    }
}

export default UrlComponent;