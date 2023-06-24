

// Trabalhando com states
/*import React, { Component } from "react"; //Importa o componete

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "Matheus",
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);

    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;

    state.contador += 1;

    this.setState(state);
  }

  diminuir(){

    let state = this.state;

    if(state.contador === 0){
      alert("Opa chegou a zero!");
      return;
    }

    state.contador -= 1;

    this.setState(state);
  }


  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h3><button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>

      </div>
    );

  }
}

export default App; // Exporta  Componente 
*/

/*import React ,{Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: "00:00:00"
    };
  }

componentDidMount(){

    setInterval(()=>{

      this.setState({hora: new Date().toLocaleTimeString()})

    }, 1000);

}

componentDidUpdate(){
  console.log("atualizou");
}

  render(){
    return(
      <div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;
*/


import React, { Component } from "react";
import Membro from './components/Membro';

class App extends Component{

render(){
  return(
    <div>
       <Membro nome="Visitante"/>
    </div>
  );
}
}

export default App;