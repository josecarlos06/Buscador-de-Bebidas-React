import { createContext, useEffect, useState } from "react";
import { getData } from "../service/service";

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {
   const [bebida, setBebida] = useState('');
   const [searchBebidas, setSearchBebidas] = useState([]);
   useEffect(()=>{
      if(bebida){
         const searchBebida = async() => {
            const {drinks} = await getData(bebida);
            setSearchBebidas(drinks);
         }
         searchBebida();
      }
   },[bebida]);
   return(
      <BebidasContext.Provider value={{bebida,setBebida,searchBebidas}}>
         {children}
      </BebidasContext.Provider>
   )
}

export {BebidasProvider};
export default BebidasContext;