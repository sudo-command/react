import axios from "axios"
import { CovidModel } from "../models/CovidModel";

export const getCovidData = async()=>{
   try {
    let {data} = await axios.get<any>(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`)
    return data;
   } catch (error) {
    return error;
   } 
  }