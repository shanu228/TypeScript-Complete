// import Box from "./components/Box";

// import { useState } from "react";

// function App() {
//   return (
//     <>
//       <div>
//         <Box
//           heading={"Hello World"}
//           count={234}
//           func1={(a: string) => {
//             alert(a);
//           }}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

// ----------------------------

// import Box from "./components/Box";

// function App() {
//   return (
//     <>
//       <div>
//         <Box heading={"Hello World"} count={234}>
//           {"wow nice"}
//         </Box>
//       </div>
//     </>
//   );
// }

// export default App;

// -----------------------------

// Generics

// import { useState } from "react";
// import Box from "./components/Box";

// function App() {
//   const [val, setVal] = useState<string>("");

//   return (
//     <>
//       <div>
//         <Box label="Search" value={val} setter={setVal} />
//       </div>
//     </>
//   );
// }

// export default App;

// ---------------------------------

// hooks use in TS

// import { useState } from "react";

// interface Person {
//   name: string;
//   age: number;
// }

// function App() {
//   const [user, setUser] = useState<Person>({
//     name: "",
//     age: 0,
//   });

//   const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="number"
//           placeholder="age"
//           value={user?.age}
//           onChange={(e) => {
//             setUser((prev) => ({
//               ...prev,
//               age: Number(e.target.value),
//             }));
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={user?.name}
//           onChange={(e) => {
//             setUser((prev) => ({
//               ...prev,
//               name: e.target.value,
//             }));
//           }}
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// -----------------------------------------------

// useContext in TS

// import { ReactNode, createContext, useState } from "react";
// import Box2 from "./components/Box2";

// type ThemeType = "light" | "dark";

// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType | null>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<ThemeType>("light");

//   const toggleTheme = () => {
//     setTheme((prev) => {
//       return prev === "light" ? "dark" : "light";
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// function App() {
//   return (
//     <ThemeProvider>
//       <div>hello</div>
//       <Box2 />
//     </ThemeProvider>
//   );
// }

// export default App;

// ---------------------------------------------

// useReducer in TS

// import { useReducer } from "react";

// type StateType = {
//   count: number;
// };

// type ActionType =
//   | { type: "Increment"; payload: number }
//   | { type: "Decrement"; payload: number };

// const reducer = (state: StateType, action: ActionType): StateType => {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + action.payload };

//     case "Decrement":
//       return { count: state.count - action.payload };

//     default:
//       return state;
//   }
// };

// const initialState: StateType = {
//   count: 0,
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const increment = (): void => {
//     dispatch({
//       type: "Increment",
//       payload: 1,
//     });
//   };

//   const decrement = (): void => {
//     dispatch({
//       type: "Decrement",
//       payload: 1,
//     });
//   };

//   return (
//     <div>
//       <h1>Count Change</h1>

//       <p>Count: {state.count}</p>

//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// export default App;

// --------------------------------------

// redux toolkit in TS

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StateType,
  increment,
  decrement,
  incrementByValue,
} from "./components/redux";

function App() {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByValueHandler = () => {
    setVal(0);
    dispatch(incrementByValue(val));
  };

  return (
    <div>
      <h1>Toolkit</h1>

      <h2>Count: {count}</h2>

      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button disabled={val < 0} onClick={incrementByValueHandler}>
        Add
      </button>
    </div>
  );
}

export default App;
