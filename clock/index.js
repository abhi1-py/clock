// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//            abhinav
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function Lab1() {
//     const [count, setCount] = useState(5);

//     return (
//       <center>
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount((count *count)/2)}>
//                 Click me
//             </button>
//         </div>
//         </center>
//     );
// }

// export default Lab1

// import React from 'react';
// import "./App.css";
// const Greetings=()=>{
//   return(
//     <center>
//     <div>
//       <h1>m</h1>
//       <h2>my</h2>
//       <h3>name</h3>
//       <h4>is</h4>
//       <h5>abhinav</h5>
//       <img src="./IMG20230702172127" alt="logo" />
//     </div>
//     </center>
//   );
// }
// export default Greetings



// import React,{useState,useEffect} from 'react';
// function MouseClick() {
//   const[count,setCount]=useState(0);
//   useEffect(() =>{
//     const handleclick= () => {
//       setCount((prevcount)=> prevcount+1);
//     };
//     window.addEventListener("mousemove",handleclick);
//     return()=>{
//       window.removeEventListener("mousemove",handleclick);
//     };
//   }
//   );
//   return(
//     <div>
//       <p>count:{count}</p>
//     </div>

//   );
// }
// export default MouseClick;



// import React , {useReducer} from 'react'
// const reducer=(state, action)=>{
//     if(action.type === "Increment")
//         return state+1;
//     else if(action.type === "Decrement")
//         return state-1;
// }
// function UseReducerExample(){
//     const defaultValue = 0;
//     const [state, dispatch] =  useReducer(reducer, defaultValue);
//     return (
//        <div>
//             <h3>Maintain state with UseReducer</h3>
//             <button onClick ={()=> dispatch({type : "Increment"})}>Increment</button>
//             <button onClick ={()=> dispatch({type : "Decrement"})}>Decrement</button>
//             <p>{state}</p>
//        </div>
//     )
// }
// export default UseReducerExample;


// import React from 'react';
// import './App.css';
// const BirthdayCard = () => {
//   return (
//     <div className="birthday-card">
//       <h1>It's My Birthday!</h1>
//       <div className="a"></div>
//       <p>You're invited to celebrate with me!</p>
//       <button>RSVP</button>
//     </div>
//   );
// };
// export default BirthdayCard;


// import React, { useReducer } from 'react';

// // Reducer function to handle calculator operations
// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         result: state.num1 + state.num2,
//       };
//     case 'SUBTRACT':
//       return {
//         ...state,
//         result: state.num1 - state.num2,
//       };
//     case 'MULTIPLY':
//       return {
//         ...state,
//         result: state.num1 * state.num2,
//       };
//     case 'DIVIDE':
//       return {
//         ...state,
//         result: state.num1 / state.num2,
//       };
//     case 'RESET':
//       return {
//         ...state,
//         num1: 0,
//         num2: 0,
//         result: 0,
//       };
//     default:
//       return state;
//   }
// }

// // Calculator component
// function Calculator() {
//   const [state, dispatch] = useReducer(reducer, {
//     num1: 0,
//     num2: 0,
//     result: 0,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: 'RESET' }); // Reset the result on number input change
//     dispatch({ type: name, payload: Number(value) });
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         name="num1"
//         value={state.num1}
//         onChange={handleInputChange}
//       />
//       <input
//         type="number"
//         name="num2"
//         value={state.num2}
//         onChange={handleInputChange}
//       />
//       <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
//       <button onClick={() => dispatch({ type: 'SUBTRACT' })}>Subtract</button>
//       <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
//       <button onClick={() => dispatch({ type: 'DIVIDE' })}>Divide</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//       <div>Result: {state.result}</div>
//     </div>
//   );
// }

// export default Calculator;



// import React, { useState, useReducer, useEffect } from "react";
// import './App.css'; 

// const initialState = 0;

// function reducer(state, action) {
//   const operand1 = parseInt(action.operand1, 10);
//   const operand2 = parseInt(action.operand2, 10);

//   switch (action.operator) {
//     case "SUM":
//       return {
//         value: operand1 + operand2
//       };
//     case "DIFFERENCE":
//       return {
//         value: operand1 - operand2
//       };
//     case "PRODUCT":
//       return {
//         value: operand1 * operand2
//       };
//     case "QUOTIENT":
//       return {
//         value: operand1 / operand2
//       };
//     case "EXPONENTIATION":
//       return {
//         value: Math.pow(operand1, operand2)
//       };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [operand1, setOperand1] = useState("");
//   const [operand2, setOperand2] = useState("");
//   const [operator, setOperator] = useState("SUM");
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     dispatch({ operator, operand1, operand2 });
//   }, [operand1, operand2, operator]);

//   return (
//     <p className="avi">
//     <div className="App">
//       <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫</h1>
//       <div className="form">
//         <input className="avi1"
//           value={operand1}
//           onChange={(evt) => setOperand1(evt.target.value)}
//           type="number"
//         />
//         <select className="avi3"
//           value={operator}
//           onChange={(evt) => setOperator(evt.target.value)}
//         >
//           <option value="SUM">+</option>
//           <option value="DIFFERENCE">-</option>
//           <option value="PRODUCT">*</option>
//           <option value="QUOTIENT">/</option>
//           <option value="EXPONENTIATION">^</option>
//         </select>
//         <input className="avi2"
//           value={operand2}
//           onChange={(evt) => setOperand2(evt.target.value)}
//           type="number"
//         />
//       </div>
//       <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result: &nbsp;&nbsp;{state.value}</h2>
//     </div>
//     </p>
//   );
// }
// export default App;






// import React from 'react';
// import './App.css'; // Import the CSS file for styling

// const GreetingCard = () => {
//     return (
//         <div className="greeting-card">
//             <div className="greeting-card-content">
//                 <h1 className="greeting-title"><p></p>&nbsp;&nbsp;You are Invited </h1>
//                 <p className="greeting-message">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"𝐓𝐎 𝐓𝐇𝐄 𝐋𝐀𝐔𝐍𝐂𝐇 𝐎𝐅"<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝗖𝗛𝗔𝗡𝗗𝗥𝗔𝗬𝗔𝗔𝗡 𝟯
//                 </p>
//                 <p class="text-container">
//                 &nbsp;&nbsp;𝑭𝒓𝒊𝒅𝒂𝒚,𝑱𝒖𝒍𝒚 14,2023<br></br>&nbsp;&nbsp;𝒂𝒕 02:35 𝑷𝑴 𝑰𝑺𝑻<br></br>&nbsp;&nbsp;𝐓𝐡𝐞 𝐒𝐚𝐭𝐢𝐬𝐡 𝐃𝐡𝐚𝐰𝐚𝐧 𝐒𝐩𝐚𝐜𝐞 𝐂𝐞𝐧𝐭𝐫𝐞 𝐢𝐧 𝐒𝐫𝐢𝐡𝐚𝐫𝐢𝐤𝐨𝐭𝐚, 𝐀𝐧𝐝𝐡𝐫𝐚 𝐏𝐫𝐚𝐝𝐞𝐬𝐡
//                 </p>
//                 <p class="image-container">ISRO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

//             </div>
//         </div>
//     );
// };

// export default GreetingCard;

// import React, { useState } from 'react';
// import './App.css';

// const Form = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', username, password);
//     setUsername('avi');
//     setPassword('123');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <center>
//       <div>
//         <h1>Result</h1>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">submit</button>
//       </center>
//     </form>
//   );
// };

// export default Form;



// import React from 'react';
// import './App.css';

// const LoginForm = () => {
//     return (
//         <form >
//           <center>
//           <div>
//             <h1>Students Result</h1>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"

//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"

//             />
//           </div>
//           <button type="submit">submit</button>
//           </center>
//           <div className='image'>NCET</div>
//         </form>
        
//       );
//     };



// export default LoginForm;



// import React, { useEffect, useState } from "react";
// import './App.css';
// const borderStyle = {
//     border: '1px solid black',
//     padding: '10px',
//   };
// const date = new Date();
// export default function App() {
//   const [dateTime, setDateTime] = useState({
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
//   });
//   useEffect(() => {
//     const timer = setInterval(() => {
//       const date = new Date();
//       setDateTime({
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds()
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
//   return (
//     <center>
//     <div className="abhinav">
//       <span style={borderStyle}>
//         {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
//       </span>
//     </div>
//     </center>
//   );
// }

// import { useState } from "react";
// const borderStyle = {
//     border: '1px solid black',
//     padding: '10px',
//   };
// const App = () =>{
//   let time  = new Date().toLocaleTimeString()

//   const [ctime,setTime] = useState(time)
//   const UpdateTime=()=>{
//     time =  new Date().toLocaleTimeString()
//     setTime(time)
//   }
//   setInterval(UpdateTime)
//   return (
//   <div className="aa"><h1 style={borderStyle}>{ctime}</h1>
//   </div>
//   );
// }
// export default App;




// import React, { useState, useEffect } from 'react';
// import './App.css';
// // const borderStyle = {
// //   border: '10px solid black',
// //   padding: '0px',
// // };
// const Clock = () => {
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const currentDate = new Date();
//       const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit',milisecond:'2-digit', hour12: true });
//       setTime(currentTime);
//       setDate(currentDate.toDateString());
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
      
//     <div className="clock-container">
//       <h1 className='aaa' >CASIO</h1>
//       <div className="clock">
//         <div className="time">{time}</div>
//         <div className="date">{date}</div>
//       </div>
//       </div>
    
    
//   );
// };

// export default Clock;



import React, { useState, useEffect } from 'react';
import './App.css';

const Clock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit',milisecond:'2-digit', hour12: false });
      setTime(currentTime);
      setDate(currentDate.toDateString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock-container">
      <h1 className='aaa'><b>CASIO</b></h1>
      <div className="clock">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default Clock;
