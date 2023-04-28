import axios from "axios"

export const getData = async (nombre) => {
   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`
   try{
      const {data} = await axios(url)
      return data
   }catch(error){
      console.log("object");
   }
}