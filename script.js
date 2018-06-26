var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	/**** OTHER COMPONENTS ****/
	componentWillMount: function () {
        console.log();
        
    },

    componentDidMount: function () {
        console.log();
    },

    componentWillReceiveProps: function() {
        console.log();
    },

    shouldComponentUpdate: function () {
        console.log();
    },
    
    componentWillUpdate: function() {
        console.log();
    },

    componentDidUpdate: function() {
        console.log();
    },

    componentWillUnmount: function(){
        console.log();
    },
 
	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, 'odejmij'),
			React.createElement('span', {}, 'Liczniki' + this.state.counter),
			React.createElement('button', {onClick: this.increment}, 'dodaj')
		);
	}
});

var element = React.createElement(Counter);

ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element, document.getElementById('app-second'));
ReactDOM.render(element, document.getElementById('app-third'));