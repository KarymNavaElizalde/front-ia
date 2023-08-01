import { Login, Signup, Getstarted } from "./pages"
import { ProtectedRoute } from "./pages/components";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    getToken()
  },[])


const getToken = ()=> {
    const token = localStorage.getItem("sesionToken")
    return token
}


  return (
    <BrowserRouter>
            <Routes>
                <Route path='/home' element={ <Home /> } />
                <Route path='/signup' element={ <Signup /> } />
                <Route path='/login' element={ <Login /> } />

                <Route element={<ProtectedRoute  getToken={getToken} />} >
                    <Route path='/getstarted' element={ <Getstarted /> } />
                </Route> 
            </Routes>
    </BrowserRouter>
  )
}

export default App



