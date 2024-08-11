import { useNavigate } from "react-router-dom"
import './singlePageStyle.scss';
import { Helmet } from "react-helmet";

const SinglePageRender = (props) => {

        const pageCount = props?.SinglePage,
                language = props?.language,
                price = props?.price,
                title = props?.title,
                name = props?.name
        const { dataType, description, thumbnail } = props

        const navigate = useNavigate()

        return (
            <div className="single">
                <Helmet>
                    <meta
                        name="descriprion"
                        content = {dataType === "comic" ? `${title} comic info` : `${name} character info`}
                    />
                    <title>{dataType === "comic" ? title : name}</title>
                </Helmet>
                <img src={thumbnail} alt={title} className="single__img"/>
                <div className="single__info">
                    <h2 className="single__name">{dataType === "comic" ? title : name}</h2>
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