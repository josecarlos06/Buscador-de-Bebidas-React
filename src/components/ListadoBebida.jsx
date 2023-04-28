const ListadoBebida = ({bebida}) => {
   const {strDrink,strDrinkThumb} = bebida;
  return (
    <div className="rounded overflow-hidden">
      <figure>
         <img src={strDrinkThumb} alt={strDrink} className="h-72 object-cover w-full"/>
      </figure>
      <h2 className="text-2xl font-medium p-2">{strDrink}</h2>
      <button className="bg-orange-400 w-full p-3 rounded text-white text-xl transition hover:bg-orange-500">Ver receta</button>
    </div>
  )
}

export default ListadoBebida