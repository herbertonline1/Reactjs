

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


/*
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
*/



// Renderização codicional
/*import React, {Component} from "react";
  

class App extends Component{
  constructor(props){
  super(props);
  this.state ={
      status: 1
  };
}




render(){
    return(
      <div>
        
      {this.state.status === 1 && 

      <h1>Bem-Vindo ao Sistema</h1>


      }

      <div>
        <h2>Curso React JS</h2>
      </div>

      </div>
    );

  }

}
  export default App;
*/

/*

//Trabalhando com Lista
import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username: 'Matheus', curtidas:10, comentarios:2},
                {id: 2, username: 'Lucas', curtidas:120, comentarios: 24},
                {id: 3, username: 'Amanda', curtidas:30, comentarios: 12},
                {id: 4, username: 'Ricardo', curtidas:1, comentarios: 0},
            ]
        };

    }

    render(){
        return(
            <div>

                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username}
                              curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}

            </div>         
        );
    }
}

export default App;

*/

//Manipulando formularios
/*import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            email: '',
            senha: '',
            sexo: 'masculino'
         }

         this.trocaEmail = this.trocaEmail.bind(this);
         this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSexo(e){
        let valorDigitado = e.target.value
        this.setState({sexo: valorDigitado});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email} 
                       onChange={this.trocaEmail} /> <br/>
                Senha:
                <input type="text" name="senha" value={this.state.senha}
                       onChange={(e) => this.setState({senha: e.target.value})} /><br/>

                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                </div>
            </div>         
        );
    }
}

export default App;
*/


/*
//Praticando Formularios Aula 43
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: '',

    };

    this.cadastra = this.cadastra.bind(this);
  }

cadastra(event){
  const {nome, email, senha} = this.state;


  if(nome !== "" && email !== "" && senha !== ""){

    alert(`Nome: ${nome} \nEmail:${email}  \nSenha: ${senha}`);
  
  }else{
    this.setState({error: "Ops! Esta faltando alguma coisa!!!"});
  }


  

  event.preventDefault();



}


  render() {
    return (

      <div>
        <h1>Novo Usuario</h1>
       
        {this.state.error && <p>{this.state.error}</p>}
       
        <form onSubmit={this.cadastra}>

          <label>Nome:</label>
          <input type="text" value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
          <label>Email:</label>
          <input type="email" value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} /><br />

          <label>Senha:</label>
          <input type="password" value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })} /> <br/>

        <button type="submit" >Cadastras</button>

        </form>
      </div>
    );
  }

}


export default App;
*/


/*
//Manipulando formularios Pt2 Aula 44
import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = { 
            form:{
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
         }

         this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e){
       let form = this.state.form; 
       form[e.target.name] = e.target.value;
       this.setState({form: form});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome:
                <input type="text" name="nome" value={this.state.form.nome} 
                       onChange={this.dadosForm}/><br/>
                Email:
                <input type="email" name="email" value={this.state.form.email} 
                       onChange={this.dadosForm} /> <br/>
                Senha:
                <input type="text" name="senha" value={this.state.form.senha}
                       onChange={this.dadosForm} /><br/>

                Sexo:
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

                <div>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>
            </div>         
        );
    }
}

export default App;
*/

import React, {Component} from "react";
import './style.css'
import './index.css'

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    textoFrase: ""
  };


  this.quebraBiscoito = this.quebraBiscoito.bind(this);

  this.frases = ['A vida trará coisas boas se tiver paciência.', ' Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', ' A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.' ];
}


quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

  state.textoFrase = this.frases[numeroAleatorio];
  this.setState(state);
}

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>

      </div>
    )
      
    
  }
}

export default App;