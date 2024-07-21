import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCounterCero: true,
            counter: 0,
        }
    }

    componentDidMount() {
        console.log('El componente se ha montado')
    }

    componentWillUnmount() {
    
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            console.log(`El contador ha cambiado de ${prevState.counter} a ${this.state.counter}`);
        }
    }

    handleIncrementClick = () => {
        console.log('Botón de incrementar clicado');
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            isCounterCero: prevState.counter + 1 === 0
        }));
    }

    handleDecrementClick = () => {
        console.log('Botón de decrementar clicado');
        this.setState((prevState) => ({
            counter: prevState.counter - 1,
            isCounterCero: prevState.counter - 1 === 0
        }));
    }

    render() {
        return (
            <header>
                <h1>{this.props.appName}</h1>
                <p>{this.state.isCounterCero ? 'Verdadero' : 'Falso'}</p>
                <p>{this.state.counter < 0 ? 'El contador tiene valor negativo (-)' : 'El contador tiene valor positivo (+)'}</p>
                <p>Contador: {this.state.counter}</p>
                <button onClick={this.handleDecrementClick}>-</button>
                <button onClick={this.handleIncrementClick}>+</button>
            </header>
        )
    }
}

export default Header;
