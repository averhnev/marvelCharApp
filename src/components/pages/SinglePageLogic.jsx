import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SinglePageRender from './SinglePageRender';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

const SinglePageLogic = ({dataType}) => {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const {clearError, process, setProcess, getCharacter, getComic} = useMarvelService()

    useEffect(() => {
        updateData()
    }, [id]) // eslint-disable-line
    
    const updateData = () => {
        clearError()
        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
                    break
            case 'character':
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'))
                    break
            default:
                throw new Error('incorrect dataType in props')
        }
    }

    const onDataLoaded = (data) => {
        setData(data)
    }

    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error || !data) ? <SinglePageRender {...data} dataType={dataType}/> : null

    return (
        <>
            {setContent(process, SinglePageRender, {...data, dataType})}
        </>
    )
}

export default SinglePageLogic