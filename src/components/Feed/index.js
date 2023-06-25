/*import React, {Component} from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({nome: "Matheus"})
    }

    render(){
        return(
            <div>
               <h2>Bem-Vindo(a){this.state.nome} </h2>

               <button onClick={this.entrar}>
                Entrar como Matheus
               </button>

               <button onClick={() => this.setState({nome: " "})}>
                Sair
               </button>
            </div>
        );
    }
}


export default Membro;




//Trabalhando com Lista

/*import React, { Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>
                {this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : 
                    this.props.curtidas + ' curtida'} 
                    / 
                {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios' :
                    ''}
                </a>
                <hr/>
            </div>
        );
    }
}

export default Feed;

*/


import React, { Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>
                {this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : 
                    this.props.curtidas + ' curtida'} 
                    / 
                {this.props.comentarios > 1 ? this.props.comentarios + ' comentarios' :
                    ''}
                </a>
                <hr/>
            </div>
        );
    }
}

export default Feed;