import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {

  constructor(props){ //propiedades o atributos propios que tendría ese html y lo pintaría de tal o cual forma
    super(props); //información que van a recibir
    this.state = { //información que puede modificar y se notará a la vista
        age : 29
    } 
  }

  render() {
    return (
      <div>
            <h1>
                ¡Hola { this.props.name }!
            </h1>
            <h2>
                Tu edad es de: {this.state.age}
            </h2>
            <div>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>
            </div>
      </div>
    )
  }

  birthday = () => {
    this.setState((prevState) => 
        (
            {
                age: prevState.age + 1
            }
        ))
  }

}

Greeting.propTypes = {
    name: PropTypes.string
}

export default Greeting;