import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';


const LoginCreate = () => {
    const { userLogin } = React.useContext(UserContext)
    const { error, loading, request } = useFetch()
    const username = useForm();
    const email = useForm('email');
    const password = useForm();



  async function handleSubmit(event) {
        event.preventDefault();
        console.log( username.value, email.value,  password.value)

        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        })

        const { response } = await request(url, options)
        console.log(response)
        if(response.ok){
            userLogin(username.value, password.value)
        } 

        
    }
    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username} />
            <Input label="Email" type="email" name="email" {...email}  />
            <Input label="Senha" type="password" name="password" {...password}  />
            { loading ? (
                 <Button disabled>Carregando...</Button> 
            ): (
                <Button>Cadastrar</Button>
            )}
            <Error error={error}/>
            </form>
        </section>
    )
}

export default LoginCreate
