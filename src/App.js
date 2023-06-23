/*export default function App(){
  return(
    <div>
      <h1>Bem vindo ao sistema</h1>
      <h2>@Sujeitoprogramador :)</h2>
    </div>
  )


}*/

/*import React from "react";

const Equipe = (props) => {
  return (
    <div>
     <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
     <Social fb={props.facebook}/>
     <hr/>
    </div>
  );
}

const Sobre = (props) =>{
  return(

    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>

    </div>
  );
}

const Social = (props) =>{
  return(
    <div>
   
      <a href={props.fb}>Facebook</a>
      <a>Linkedin</a>
      <a>Yuotube</a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça a nossa equipe</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="https://google.com"/>

      <Equipe nome="Mathues" cargo="FrontEnd" idade="37" facebook="https://google.com"/>

      <Equipe nome="Amanda" cargo="Redes" idade="20" facebook="https://google.com"/>
       
    </div>
  );
}

export default App;
*/



//Criando componetes em forma de classes (Class component)

import React, {Component} from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>

        
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá sou o(a): {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}



function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Matheus" cargo="Programador" idade="25"/>
    </div>
  );
}


export default App;