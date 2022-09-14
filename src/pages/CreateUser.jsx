import { Form, Formik } from 'formik'
import {createUserRequest} from '../api/createUserRequest.js'


function CreateUser() {
  return (
    <div>
        <Formik 
            initialValues={{
                documento:"",
                nombres:"",
                apellidos:"",
                email:"",
            }}
            onSubmit={async (values, actions)=>{
                console.log(values);
                try {
                    const reponse = await createUserRequest(values);
                    console.log(reponse);
                    actions.resetForm();

                }catch (error){
                    console.error(error);
                }
                
            }}
        >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                            <Form className='container' onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className='form-label'>Numero de documento</label>
                                <input type="number" className='form-control' name='documento' placeholder='Nombres completos' onChange={handleChange} value={values.documento} />
                            </div>

                            <div className="mb-3">
                                <label className='form-label'>Nombres</label>
                                <input type="text" className='form-control' name='nombres' placeholder='Nombres completos' onChange={handleChange} value={values.nombres}/>
                            </div>
            
                            <div className="mb-3">
                                <label className='form-label'>Apellidos</label>
                                <input type="text" className='form-control' name='apellidos' placeholder='Apellidos completos' onChange={handleChange} value={values.apellidos}/>
                            </div>
            
            
                            <div className="mb-3">
                                <label className='form-label'>Email</label>
                                <input type="email" className='form-control' name='email' placeholder='example@example.com' onChange={handleChange} value={values.email}/>
                            </div>
            
                            <button type="submit" className="btn btn-primary">
                                {isSubmitting ? "Guardando nuevo asociado": "Crear asociado"}
                            </button>
                        </Form>
            )}
        </Formik>
    </div>
  )
}

export default CreateUser