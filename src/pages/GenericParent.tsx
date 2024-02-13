import React, { useEffect, useState } from "react";
// import GenericGrid from "./GenericGrid";

type Props = {};

const GenericParent = (props: Props) => {
  const [state, setState] = useState([]);
  // determining what category is chosen

  useEffect(() => {
    console.log("runs every time 'state' changes");
    
  }, [state]);

//   if (state) {
//     return (
//       <>
//         <p>some text</p>
//       </>
//     );
//   }

  return (
    <div>
      {/* Component with category choice buttons */}
      {/* <GenericGrid items={state} /> */}
    </div>
  );
};

export default GenericParent;
