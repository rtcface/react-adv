import '../styles/styles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

export const FormikBasicPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('El nombre es obligatorio'),
            lastName: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El correo no es valido').required('El correo es obligatorio')
        })
    });
    
  return (
    <div>
        <h1>Formik Tutorial</h1>
        <form noValidate onSubmit={ formik.handleSubmit }>
            <label htmlFor="firstName"> Nombre </label>
            <input 
                type="text"
                name="firstName" 
                onChange={formik.handleChange} 
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
            />
            { formik.touched.firstName && formik.errors.firstName &&  <span>{formik.errors.firstName}</span>}
            <label htmlFor="lastName"> Apellido </label>
            <input 
                type="text" 
                name="lastName"
                onChange={formik.handleChange} 
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
            />
            { formik.touched.lastName && formik.errors.lastName &&  <span>{formik.errors.lastName}</span>}
            <label htmlFor="email"> Correo Electronico </label>
            <input 
                type="email" 
                name="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
                onBlur={formik.handleBlur}
            />
            { formik.touched.email && formik.errors.email &&  <span>{formik.errors.email}</span>}
            <button type="submit"> Enviar </button>
        </form>
    </div>
  )
}