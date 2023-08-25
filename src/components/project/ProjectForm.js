import InputForm from '../form/InputForm'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useState, useEffect } from 'react'


function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => { setCategories(data) })
            .catch((err) => console.error(err))


    }, [])

    return (
        <form className={styles.form}>
            <div>
                <InputForm
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Digite o nome do projeto"
                />
            </div>
            <div>
                <InputForm
                    type="number"
                    text="Orçamento do projeto"
                    name="name"
                    placeholder="Insira o orçamento."
                />
            </div>
            <div>
                <Select
                    name="category_id"
                    text="Selecione a categoria."
                    options={categories}
                />
            </div>
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm