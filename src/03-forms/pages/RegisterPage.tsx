import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
    
    const { 
        onSubmit, 
        onChange, 
        resetForm, 
        name,
        email,
        password1,
        password2,
        isValidEmail,
    } = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });
       
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
                className={`${ name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span> Este campo es obligatorio</span> }
             <input 
                type="email" 
                name="email" 
                placeholder="Correo"
                value={email} 
                onChange={onChange}
                className={`${ !isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span> El correo no es valido</span> }
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
            <button type="button" onClick={resetForm}>Limpiar</button>
        </form>
    </div>
  )
}