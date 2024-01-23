// import React from "react";

// const Box = ({heading} : {heading : string}) => {
//   return (
//     <>
//       <div>{heading}</div>
//     </>
//   );
// };

// export default Box;

// -------------

// type PropsType = {
//   heading: string;
//   count: number;
//   func1: (a: string) => void;
// };

// // import React from "react";

// // const Box = (props : PropsType) => {
// //   return (
// //     <>
// //       <div>{props.heading}</div>
// //     </>
// //   );
// // };

// // export default Box;

// import React from "react";

// const Box = ({ heading, count, func1 }: PropsType) => {
//   func1("eee");
//   return (
//     <>
//       <div>{heading}</div>
//       <p>{count}</p>
//     </>
//   );
// };

// export default Box;

// -----------------------------------------------

// import React, { ReactNode } from "react";

// type PropsType = {
//   heading: string;
//   count?: number;
//   children: ReactNode;
// };

// const Box = ({ heading, count = 5, children }: PropsType) => {
//   return (
//     <>
//       <div>{heading}</div>
//       {count && <p>{count}</p>}
//       {children}
//     </>
//   );
// };

// export default Box;

// ----------------------------------------

// use of Generic

import React, { Dispatch, SetStateAction } from "react";

type InputValType = string | number;

const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <form>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setter(e.target.value as T)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Box;
