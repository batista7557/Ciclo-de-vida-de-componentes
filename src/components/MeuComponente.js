import React, { Component } from 'react'

class MeuComponente extends Component {

    constructor(props){
        super(props)

        this.state = { numero: 5 }

        console.log('Constutor...')
    }

    render() {
        console.log('Render...')
        return <div>
            <p>{this.props.titulo}</p>
            <p>{this.state.numero}</p>
        </div>
    }
}

export default MeuComponente