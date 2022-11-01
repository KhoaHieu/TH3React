import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './MyComponent';

// import MyButton from './MyButton';
// import MySection from './MySection';

// ex04

// const array=["First" , "Second","Third"];
// const object={
//   first:1,
//   second:2,
//   third:3,
// };
// import MyComponent from './MyComponent';

// 1.3

// function render({second}){

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent></MyComponent>
);
//   <main>
//     <MyButton /><MyButton text={second.text}disabled={second.disabled} />
//   </main>
//   );
// }
// render({
//   second:{
//     text:"Second Button",
//     disabled:true,
//   },
// })
  // <p>
  //   Hello,<strong>JSX</strong>
  // </p>

  // 0.1

  // <div>
  //   <button />
  //   <code />
  //   <input />
  //   <label />
  //   <p />
  //   <pre />
  //   <select />
  //   <table />
  //   <ul />

  // </div>

  // 0.2

  // <section>
  //   <header>
  //     <h1>
  //       A Header
  //     </h1>
  //     <nav>
  //       <a href='item'>Nav Item </a>
  //     </nav>
  //     <main>
  //       <footer>
  //         <small> &copy;2021 </small>
  //       </footer>
  //     </main>
  //   </header>
  // </section>

  // ex0.3
  // <MySection>
  //   <MyButton>My Button Text</MyButton>
  // </MySection>

  // ex0.4
  // <section>
  //   <h1>Array</h1>
  //   <ul>
  //     {array.map((i) => (
  //       <li key = {i}> {i} </li>
  //     ))}
  //   </ul>

  //   <h1>Object</h1>
  //   <ul>
  //     {Object.keys(object).map((i) => (
  //       <li key = {i}>
  //         <strong>{i}: </strong>
  //         {object[i]}
  //       </li>
  //     ))}
  //   </ul>
  // </section>

// Ex1.0


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

