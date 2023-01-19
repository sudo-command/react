import React, { useContext } from 'react'
import { AuthContext, AuthContextInterface } from '../App'

export default function Login() {

  let authObj:AuthContextInterface;

  let setData=(name:string,age:number)=>{
      authObj.name=name
      authObj.age=age
      auth=authObj;
  }

  const auth = useContext(AuthContext)
  if(auth==null){
    return  <div>
      <h1>Login</h1>
      <button type="submit"  onClick={()=>setData("toei",23)}>Login</button>
    </div>
  }
  return (
   <>
    <h1>LOGOUT</h1>
    {auth?.name}
   </>
  )
}
