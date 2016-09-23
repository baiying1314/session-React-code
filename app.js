const App = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },
    add(){
        this.setState(
            {count: this.state.count + 1}
        );
    },
    render() {
        return (
            <div>
                {this.state.count}
                <br/>
                <br/>
                <button onClick={this.add}>+</button>
            </div>
        )

    }
})
ReactDOM.render(<App/>, document.getElementById('content'));