import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);


    const upDateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;

        setLoading(true);
        document.querySelector("#con").style.display = "block";

        let data = await fetch(url);
        let parsedData = await data.json();

        document.querySelector("#con").style.display = "none";
        setLoading(false);

        setArticle(parsedData.articles);
        setTotalResult(parsedData.totalResults);

    }

    useEffect(() => {
        props.setProgress(0);
        upDateNews();
        props.setProgress(100);

    }, []);

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
        setPage(page + 1);

        setLoading(true);
        document.querySelector("#con").style.display = "block";

        let data = await fetch(url);
        let parsedData = await data.json();

        document.querySelector("#con").style.display = "none";
        setLoading(false);

        setArticle(article.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
    };

    document.title = `${(props.category).slice(0, 1).toUpperCase() + (props.category).slice(1).toLowerCase()} - Eagle News`;


    return (
        <div className='container my-3'>
            <Spinner />
            <h2 className='text-center'>Top headlines in <span className='category'>{(props.category).slice(0, 1).toUpperCase() + (props.category).slice(1).toLowerCase()}</span> Category</h2>

            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length < totalResult}
                loader={loading && <Spinner />}
            >
                <div className="row">
                    {article.map((element) => {
                        return <div className='col-lg-4 col-md-6' key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 65) + "..." : ""} content={element.content ? element.content.slice(0, 95) + "..." : ""} url={!element.urlToImage ? "article1.jpg" : element.urlToImage} newsUrl={element.url} date={new Date(element.publishedAt)} author={element.author} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div >
    )
}

News.defaultProps = {
    country: 'in',
    category: "general",
    pageSize: 3,
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    setProgress: PropTypes.func
}

export default News;
