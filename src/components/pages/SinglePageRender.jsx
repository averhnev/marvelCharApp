import { useNavigate } from "react-router-dom"
import './singlePageStyle.scss';

const SinglePageRender = (props) => {
    
        const pageCount = props?.SinglePage,
                language = props?.language,
                price = props?.price,
                title = props?.title,
                name = props?.name,
                description = props?.description,
                thumbnail = props?.thumbnail

        const navigate = useNavigate()

        return (
            <div className="single">
                <img src={thumbnail} alt={title} className="single__img"/>
                <div className="single__info">
                    <h2 className="single__name">{title ? title : name}</h2>
                    <p className="single__descr">{description}</p>
                    {pageCount ? <p className="single__descr">{pageCount}</p> : null}
                    {language ? <p className="single__descr">Language: {language}</p> : null}
                    {price ? <div className="single__price">{price}</div> : null}
                </div>
                <button
                    className="button button__main"
                    style={{"margin": 0}}
                    onClick={() => navigate(-1)}
                >
                    <div className="inner">
                        Go back
                    </div>
                </button>
            </div>
        )
}

export default SinglePageRender