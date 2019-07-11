// ESTE JUEGO ORIGINALMENTE ES EL TUTORIAL DE REACT PERO ERA UN JUEGO DE TIC-TAC-TOE

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// DECLARACION DE VARIABLES 
const valores = ["A","B","C","D","E","F","A","B","C","D","E","F","G","H","H","G"];
var vuelta = 0;
var anterior="";
var squares = Array(16).fill(null);
var turno = "A";
var scoreA = 0;
var scoreB = 0;
var squares1 = Array(16).fill(null);
var squarestemp = Array(16).fill(null);
var primera = 0;


// RENDER DE CADA CUADRO

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

// RENDER DEL TABLERO

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(16).fill(null),
    };
  }

  handleClick(i) {
    // var squares = this.state.squares.slice();
  //  var squares = this.state.squares
primera = 1;
  if (squarestemp[i] === null) 
{   
    if (vuelta === 0) {
      console.log("primera vuelta")
    squares1=squares.slice()
    // console.log("squares1=squares");
    console.log(squares1);
    squarestemp = squares.slice()
    squarestemp[i] = valores[i];
    vuelta = vuelta+1;
//    anteriorn= i;
    anterior = valores[i];
       this.setState({squares: squarestemp});
    } else {
      if (vuelta === 2 ){
console.log("ultima vuelta");
        vuelta = 0 
        if (turno === "A")
        {turno = "B";}else{
          turno = "A";
        }

console.log(squares1);
squares = squares1.slice();
console.log(squares);
this.setState({squares: squares})
      } else {
        if (anterior === valores[i] && vuelta === 1 ) {
console.log("iguales");
if (turno === "A")
        {scoreA = scoreA + 1;}else{
          scoreB = scoreB +1 ;
        }  
squarestemp[i] = valores[i];
  squares = squarestemp.slice();
this.setState({squares: squares});
vuelta = 0
} else{
  console.log("no iguales")
  squarestemp[i] = valores[i];
  
  this.setState({squares: squarestemp});
  
  //squarestemp[i] = null;
  //squarestemp[anteriorn] = null;
  // this.setState({squares: squares});
vuelta = vuelta+1;
}
}

    }
  } 
    
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    var status = "Siguiente Jugador: " + turno;
    const scoreAA = "Jugador A: " + scoreA;
    const scoreBB = "Jugador B: " + scoreB;
var instrucciones = "";
    if (primera === 0 )
   {
    instrucciones = "Este es un juego de Memorama, dónde hay 8 pares de letras, es para dos jugadores.";
status = "Empieza el Jugador A:"
    primera = 1;
   } 

    //var Ganador = "";


if(scoreA+scoreB === 8 ){

if (scoreA > scoreB)
status = "Gandor es B !!!";
if (scoreA === scoreB){
  status = "Empate !!!";
} else {
  status = "El Ganador es A!!!"
}
}

    return (
      <div>
        <div className="intrucciones">{instrucciones}</div>
        <div className="status">{status}</div>
        <div className="scoreAA">{scoreAA}</div>
        <div className="scoreBB">{scoreBB}</div>
<p></p>


        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
