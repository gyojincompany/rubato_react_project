import ArticleNotice from "./ArticleNotice";
import ArticleYoutube from "./ArticleYoutube";
import ArticleFreeBoard from "./ArticleFreeBoard";

function SectionNoticeFreeYoutube() {
    return(
        <section id="notice_free_youtube">
            <ArticleNotice></ArticleNotice>
            <ArticleFreeBoard></ArticleFreeBoard>
            <ArticleYoutube></ArticleYoutube>
        </section>
    );
}

export default SectionNoticeFreeYoutube;