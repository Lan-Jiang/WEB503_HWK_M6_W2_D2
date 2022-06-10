import React from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends React.Component {
    state = {count: 0}

    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.props.dispatch({ type: 'INCREMENT'});
    }
    decrement = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.props.dispatch({ type: 'DECREMENT'});
    }

    reset = () => {
        this.props.dispatch({ type: "RESET" });
      };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div className="p-3 bg-info">
                    <span className="p-2 mx-2 border border-white text-white">{this.props.count}</span>
                    <button className="mx-2 px-2" onClick={this.decrement}>-</button>
                    <button className="mx-2 px-2" onClick={this.increment}>+</button>
                    <button className="mx-2 px-2" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

// Add the mapStateToProps
function mapStateToProps(state) {
    return {
        count:state.count
    }
}

// export default Counter;
export default connect(mapStateToProps)(Counter);