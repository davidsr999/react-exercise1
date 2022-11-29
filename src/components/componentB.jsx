import PropTypes from 'prop-types';
import React, {Component} from "react";

export class ComponentB extends Component  {
    checkconectado = false;
    constructor(props) {
        super(props);
        this.state = {
            conectado: props.props.conectado
        }
    }

    render() {
        return (
            <div>
                <p>Nombre: {this.props.props.nombre}</p>
                <p>Apellidos: {this.props.props.apellido}</p>
                <p>Email: {this.props.props.email}</p>
                <p>Estado: {this.state.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>
                <button onClick={this.changeConectado}>Conectar/Desconectar Usuario</button>
            </div>
        );
    }

    changeConectado = () => {
        this.setState((prevState) => (
            {
                conectado: !prevState.conectado
            }
        ))
    }
    
}

ComponentB.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}