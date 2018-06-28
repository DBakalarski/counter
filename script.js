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
        console.log('wywoływanie przed renderowaniem');
        
    },

    componentDidMount: function () {
        console.log('w chwili wykonania komponent istnieje już na stronie');
    },

    componentWillReceiveProps: function() {
        console.log('zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości');
    },

    shouldComponentUpdate: function () {
        console.log('tuż przed wywołaniem metody render, sprawdza, czy faktycznie trzeba przerysować komponent');
        return true;
    },
    
    componentWillUpdate: function() {
        console.log('zostaje wywołana jeśli shouldComponentUpdate zwróci wartość true');
    },

    componentDidUpdate: function() {
        console.log('możemy wykonać manipulacje DOM');
    },

    componentWillUnmount: function(){
        console.log('możemy usunąć nasłuchiwacze czy timery');
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