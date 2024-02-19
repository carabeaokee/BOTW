// import React from "react";
// import { useState } from "react";
// import { data } from "../data";

// export const Searchbar = () => {
//   const [search, setSearch] = useState("");

//   const fetchData = (value) => {
//     fetch("http://localhost:3000/data");
//   };

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleChange = (value) => {
//     setSearch(value);
//     fetchData(value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={search}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <ul>
//         {filteredData.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Searchbar;
