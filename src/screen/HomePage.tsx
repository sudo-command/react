import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/common/Navbar';
import { CovidModel } from '../models/CovidModel';
import { getCovidData } from '../service/CovidService';

export default function HomePage() {
  const [covid, setCovid] = useState<CovidModel>();
 
  useEffect(() => {
    let getData=async()=>{
      let  covidData:CovidModel[] = await  getCovidData()
      setCovid(covidData[0])
    }
    getData();
  }, [])
    
  return (
    <>
    <div>ปี :{covid?.year} สัปดาห์ :{covid?.weeknum}  จํานวนผู้ป่วยรายใหม่ :{covid?.new_case} จํานวนผู้ป่วยสะสม :{covid?.total_case} วันที่ปรับปรุง ล่าสุด :{covid?.update_date}</div>
    </>
  )
}
