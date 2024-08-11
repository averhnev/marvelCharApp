import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage as FormikErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import useMarvelService from '../../services/MarvelService'
import ErrorMessage from '../errorMessage/ErrorMessage'

import './searchForm.scss'

const SearchForm = () => {
    const [char, setChar] = useState(null)
    const {loading, error, getCharacterByName, clearError} = useMarvelService()

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = (name) => {
        clearError()
        getCharacterByName(name).then(onCharLoaded)
    }

    const errorMessage = error ? <div className="crit-error"><ErrorMessage/></div> : null
    const results = !char ? null : char.length > 0 ?
                    <div className="form__wrapper">
                        <div className="success">
                            There is! Visit {char[0].name} page?
                        </div>
                        <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                            <div className="inner">To page</div>
                        </Link>
                    </div> :
                    <div className="form__error">
                        The character was not found. Check the name and try again
                    </div>

    return (
        <div className="form">
            <Formik
                initialValues={{
                    name: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Name is required!')
                })}
                onSubmit={ ({name}) => {
                    updateChar(name)
                }}
            >
                <Form>
                        <label htmlFor="name" className="form__label">Or find a character by name:</label>
                        <div className='form__wrapper'>
                            <Field id="name" name="name" type="text" className="form__wrapper-textarea" placeholder="Enter name"/>
                            <button
                                className="button button__main"
                                type="submit"
                                disabled={loading}>
                                <div className="inner">
                                    Find
                                </div>
                            </button>
                        </div>
                        <FormikErrorMessage name="name" className="form-error" component="div"/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default SearchForm