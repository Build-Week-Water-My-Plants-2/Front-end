 import React, { useContext } from "react";
  import {PlantContext} from "../Utilities-auth/context";
 import PlantCard from "./PlantCard";


 const ListPlants = (props) => {
     const plants = useContext(PlantContext);
     console.log(plants, "LISTPLANTS")
     return (
         <div className = 'listing'>
             {plants && plants.map(flower => <PlantCard history={props.history} key={flower.id} plants={flower} /> )} 
         </div>
     );
};

 export default ListPlants;
// import React, { useContext } from "react";
// // Components

// const ListPlants = () => {
//     const  {plants}  = useContext(PlantContext);
//     console.log({plants})
//     return (
//       <div className="products-container">
        
//       </div>
//     );
// };
// export default ListPlants;