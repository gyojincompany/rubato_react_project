import SectionNoticeFreeYoutube from "./SectionNoticeFreeYoutube";
import SectionGallery from "./SectionGallery";

function Section() {
    return(
        <section id="main">
            <img src="img/main_img.png"></img>
            <SectionNoticeFreeYoutube></SectionNoticeFreeYoutube>
            <SectionGallery></SectionGallery>
        </section>
    );
}

export default Section;