 import React, { useContext } from "react";
  import {PlantContext} from "../Utilities-auth/context";
 import PlantCard2 from "./PlantCard2";


 const ListPlants = (props) => {
     const plants = useContext(PlantContext);
     console.log(plants, "LISTPLANTS")
     return (
         <div className = 'plant-page'>
             {plants && plants.map(flower => <PlantCard2 history={props.history} key={flower.id} id={props.id} setPlants={props.setPlants} plants={flower} /> )} 
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