import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function RequireAuth() {
  const [status, setStatus] = useState(true);
  return (
   status? <Outlet/> : <Navigate to="/login"/>
  )
}
