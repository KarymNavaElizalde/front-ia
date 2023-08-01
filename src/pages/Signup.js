
import { useState } from "react"
import { urlBase } from "../callApi/urlBase"
import { useNavigate} from "react-router-dom"

export const Signup = ()=> {

  const initialStateUser = {
    nombre: '',
    apellido: '',
    nombreUsuario: '',
    contrasena: ''
  }

  const [ createUserState, setCreateUserState ] = useState(initialStateUser)

  const navigate = useNavigate()

  const sendUser = (e)=> {
    e.preventDefault()
    createUser(createUserState)
    setCreateUserState(initialStateUser)
  }

  const handleChange = (e)=> {
    setCreateUserState({...createUserState, 
        [e.target.name]: e.target.value})
}

const createUser = (newUser)=> {
    urlBase.post('users', newUser)
  .then(()=> navigate("/login"))
}

  return (
    <div className="signup-main-container">
      <div className="signup-forms-container">
      <form className="signup-form" onSubmit={sendUser}>
            <div className="signup-label-input">
                Nombre
            </div>
            <input   
                type="text"  
                name="nombre"
                value={createUserState.nombre}
                className="signup-input-form"
                onChange={handleChange}
            />
            <div className="signup-label-input">
                Apellido
            </div>
            <input  
                type="text" 
                name="apellido"
                value={createUserState.apellido}
                className="signup-input-form"
                onChange={handleChange}
            />
            <div className="signup-label-input">
                Nombre de usuario
            </div>
            <input   
                type="text"  
                name="nombreUsuario"
                value={createUserState.nombreUsuario}
                className="signup-input-form"
                onChange={handleChange}
            />
            <div className="signup-label-input">
                Contraseña
            </div>
            <input  
                type="password" 
                name="contrasena"
                value={createUserState.contrasena}
                className="signup-input-form"
                onChange={handleChange}
            />

            <input 
                type="submit" 
                className="signup-submit-btn"
                value="Registrar"
            />
        </form>
      </div>
    </div>
  );
}




