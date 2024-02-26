// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";

// export default function FavouritesPage() {
//   const { user } = useContext(AuthContext);
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     if (user) {
//       const fetchFavourites = async () => {
//         const uid = user.uid;
//         const path = doc(db, "users", uid);
//         const docSnap = await getDoc(path);

//         if (docSnap.exists()) {
//           setFavourites(docSnap.data().favourites || []);
//         }
//       };

//       fetchFavourites();
//     }
//   }, [user]);

//   return (
//     <div>
//       <h1>Your Favourites</h1>
//       {favourites.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} alt={item.name} />
//           <h2>{item.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }
