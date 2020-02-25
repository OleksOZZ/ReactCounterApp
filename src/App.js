import React from 'react';
import './App.css';
import "./components/buttons/buttons.css";
import Count from "./components/counter/Count";
import Button from "./components/buttons/Button";
import ButtonDecrOne from "./components/buttons/ButtonDecrOne";
import ButtonIncrHundred from "./components/buttons/ButtonIncrHundred";
import ButtonDecrHundred from "./components/buttons/ButtonDecrHundred";
import ButtonAC from "./components/buttons/ButtonAC";

// 1! у функціональної компоненти немає життєвого циклу. Функціональна
    // це функціональна компонента
// function App({msg, func}) {
//     console.log(`props:`, `1:`, msg, `2:`, func);
//     console.log("props");
//     return (
//     <div className="App">
//       <h1>COUNTER REACT APP</h1>
//       <p>{msg}</p>
//     </div>
//   );
//}

// 2.це Класова компонента
class App extends React.Component{
constructor(props) {
    super(props); // звертається до батьківського класу - в даному разі "Component" - створений реактом
    //console.log(`props:`, `1:`, msg, `2:`, func);
    console.log("constructor"); // конструкотр - перша фіча при створенні компонента в його життєвому циклі спрацьовує коли компонента створилась
    this.state ={
        count :0,
        data: null
    };
    //this.handlerIncr1 =this.handlerIncr1.bind(this)
}


    // componentDidMount () {
    //     console.log("componentDidMount"); // створено для опрацювання всіх асинхронних запитів.. виникає після завершення рендерінгу сторінки
    // };


    // componentWillUnmount() {
    //     console.log("componentWillUnmount"); // відловлює подію при зникненні чи завершенні життєвого циклу компоненти
    // }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("prevProps");
        // console.log(prevProps);
        console.log("prevState");
        console.log(prevState);// STATE - це сховище яке зберігає всі змінні створені для Арр доступитись до нього можна в конструкторі
    }

    // handler (id){
    //     console.log(id);
    //
    /*handlerIncr1 () { // щоб не писати bind в конструкторі використовується стрілкова функція
        this.setState({count: this.state.count + 1})
    }*/
    handlerIncr1 =()=>{
        this.setState({count: this.state.count + 1}) // setState дьоргає за собою render.
    };

    handlerDecr1 =()=> {
        this.setState({count: this.state.count - 1})
    };

    handlerIncr100 =() => {
        this.setState({count: this.state.count + 100})
    };

    handlerDecr100 =() => {
      this.setState({count: this.state.count - 100})
    };

    handlerAC =() => {
      this.setState({count: this.state.count = 0})
    };


    render() {  // виникає коли все готово до рендера - пілся конструктора чи виклика
        console.log("render");
        let {count} = this.state;
      return (
          <div className="App-header">
              <div className="btn-group">
                    <h1  style={{textAlign: "center"}}>COUNTER REACT APP</h1>
                    <Count  count={count}/>
                    <Button myFunc={this.handlerIncr1}/>
                    <ButtonDecrOne decrFunc={this.handlerDecr1}/>
                    <ButtonIncrHundred incrHundred={this.handlerIncr100}/>
                    <ButtonDecrHundred decrHundred={this.handlerDecr100}/>
                    <ButtonAC give0={this.handlerAC}/>
              </div>
          </div>
        );
    }
}

export default App;

//<button onClick={this.handler.bind(null, {id:120, sex: `male`, age: 22})}>+1</button> -->
//<button onClick={this.handlerIncr1}>+1</button>