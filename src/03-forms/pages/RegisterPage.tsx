import '../styles/styles.css'
import { useState,ChangeEvent,FormEvent } from 'react'

export const RegisterPage = () => {

    const [ registerData, setRegisterData ] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2  } = registerData;

    const onChange = ( e: ChangeEvent<HTMLInputElement> ) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(registerData)
    }

  return (
    <div>
        <h1>RegisterPage</h1>
        <form noValidate onSubmit={onSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                value={name}
                onChange={onChange}
            />
             <input 
                type="email" 
                name="email" 
                placeholder="Correo"
                value={email} 
                onChange={onChange}
            />
             <input 
                type="password" 
                name="password1" 
                placeholder="Contraseña" 
                value={password1}
                onChange={onChange}
            />
             <input 
                type="password" 
                name="password2" 
                placeholder="Confirmar Contraseña" 
                value={password2}
                onChange={onChange}
            />
            <button type="submit">Registrar Usuario</button>
        </form>
    </div>
  )
}