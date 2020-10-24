import React from 'react'
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

const UserPhotoPost = () => {
    const nome = useForm()
    const peso = useForm('number')
    const idade = useForm('number')
    const [img, setImg] = React.useState({})
    const { data, error, loading, request } = useFetch()

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData()
        formData.append('img', img.value)
        formData.append('nome', nome.value)
        formData.append('idade', idade.value)
    }

    function handleImageChange({target}) {
        setImg({
            raw: target.files[0]
        })
        event.preventDefault();

        
    }
    
    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input  label="Nome" type="text" name="nome" />
                <Input  label="Peso" type="text" name="Peso" />
                <Input  label="Idade" type="text" name="Idade" />
                <input type="file" name="img" id="img" onChange={handleImageChange} />
                <Button>Enviar</Button> 


            </form>
        </section>
    )
}

export default UserPhotoPost
