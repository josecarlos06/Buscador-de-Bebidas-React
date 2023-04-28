import { useState } from "react";
import useBebida from "../hooks/useBebida";
import ListadoBebida from "./ListadoBebida";

const AppBebida = () => {
   const [nombre, setNombre] = useState('');
   const {setBebida,searchBebidas} = useBebida();

   const handleSubmit = (e)=>{
      e.preventDefault();
      if([nombre].includes('')){
         console.log("Campo Vacio");
         return;
      }
      setBebida(nombre)
   }
  return (
   <>
      <form className="container w-11/12 mx-auto my-5 flex flex-col gap-2" onSubmit={handleSubmit}>
         <label htmlFor="bebida" className="font-black text-3xl">Buscar bebida</label>
         <div className="field border border-gray-500 flex rounded p-1">
            <input type="search" name="bebida" id="bebida" className="w-full p-2 border border-none outline-none" value={nombre} onChange={ e => setNombre(e.target.value)}/>
            <input type="submit" value="buscar" className="bg-orange-400 text-white py-2 px-5 rounded transition hover:bg-orange-600"/>
         </div>
      </form>
      <main className="container w-11/12 mx-auto">
         <h2 className="text-2xl text-center font-black">Se encontraron {searchBebidas.length} recetas</h2>
         <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 my-5">
            {searchBebidas.map(bebida=>(
               <ListadoBebida 
                  key={bebida.idDrink} 
                  bebida={bebida}/>
            ))}
         </section>
      </main>
   </>
  )
}

export default AppBebida