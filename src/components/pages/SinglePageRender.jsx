import { useNavigate } from "react-router-dom"
import './singlePageStyle.scss';
import { Helmet } from "react-helmet";

const SinglePageRender = ({data}) => {

        const pageCount = data?.SinglePage,
                language = data?.language,
                price = data?.price,
                title = data?.title,
                name = data?.name
        const { dataType, description, thumbnail } = data

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
                <img src={thumbnail} alt={title} className={dataType === 'comic' ? "single__img-comic" : "single__img-char"}/>
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