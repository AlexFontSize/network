import Done_news from "./done_news/done_news";
import classes from "./News.module.css";


const News = (props) => {
    let newElements = props.news.newsData.map(objNew => <Done_news new={objNew.new} id={objNew.id} />);
    return (
        <div className="News">
            {newElements}
        </div>
    );
};

export default News;