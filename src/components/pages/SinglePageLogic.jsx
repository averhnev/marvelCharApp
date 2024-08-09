import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SinglePageRender from './SinglePageRender';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const SinglePageLogic = ({dataType}) => {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const {loading, error, clearError, getCharacter, getComic} = useMarvelService()

    useEffect(() => {
        updateData()
    }, [id]) // eslint-disable-line
    
    const updateData = () => {
        clearError()
        // eslint-disable-next-line default-case
        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded)
                break
            case 'character':
                getCharacter(id).then(onDataLoaded)
        }
    }

    const onDataLoaded = (data) => {
        setData(data)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <SinglePageRender {...data}/> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SinglePageLogic