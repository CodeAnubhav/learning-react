import "./App.css";
import { useState } from "react";

// Testing user i created for rendring the data and displaying it to users
// const user =  {
//   name: "anubhav",
//   imageUrl: "https://media.licdn.com/dms/image/D4D03AQHH2Uz51J_uoA/profile-displayphoto-shrink_800_800/0/1696945498851?e=1706745600&v=beta&t=VmCx_ziID34ncdQiXUw8v0M-dPlo9kr0HHZdx4xhwhg",
//   imageSize:90,
// }
// function MyButton() {
//   return (
//     <button>
//       Reach out to me
//     </button>
//   );
// }

// export default function MyApp() {
//   // Conditional Data display using if else statement
//   // let content;
//   // if (isLoggedin) {
//   //   content = "Admin panel";
//   // } else {
//   //   content = "login form";
//   // }

//   return (
//     <>
//       {
//         /*Displaying data condionally*/
//       /*{content}; */
//       }

//       {/* Basic start of syntx */}
//        <div>
//       <h1>Welcome to my app</h1>
//       <p>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.</p>
//     </div>

//       {/* Rendring data from the object and displaying them to users
//      <h1>I'm {user.name}</h1>
//     <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}

//       />
//       <MyButton/> */}
//     </>
//   );
// }

// const product = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function MyApp() {

//   const listItems = product.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen',
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return (
//     <>
//       <h1>Welcome to my app</h1>
//       <p>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.</p>
//       <ul>{listItems}</ul>
//     </>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

export default function MyApp() {

  let [counter, setCounter]= useState(0)
  // let counter = 5;
  const addValue = ()=>{
    if(counter>19){
      console.log("Limit reach")
    }else{
      counter = counter + 1 ;
      setCounter(counter)
    }
  }
  const decreaseValue = ()=>{
    if(counter>0){
      counter = counter - 1;
    }else{
      console.log("Counter is already 0");
    }
    setCounter(counter); 
  }
  return (
    <>
      <h1>Welcome to my app</h1>
      <p>value {counter}</p>
      <button onClick={addValue}
      >Increase the value{counter}</button>
      <br />
      <button onClick={decreaseValue}
      >Dcrease the value {counter}</button>
      {/* < MyButton />
      < MyButton /> */}
    </>
  );
}
