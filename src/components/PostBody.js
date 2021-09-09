import post1 from "../images/post 1.png";
import person1 from "../images/person1.png";
import viewsSVG from "../images/views.svg";
import shareSVG from "../images/share.svg";
import moreOption from "../images/more options.svg";


const PostBody = () => {
 
 
  return (
    <section className="d-flex flex-col py-3 justify-content-center align-items-center">
        
        <div className="card">
            <img src={post1} className="card-img-top" alt="post 1" />
            <div className="card-body position-relative">
                <h5 className="card-title py-2 small">✍️ Article</h5>
                <p className="card-text bold">
                   <strong className="text-break">  What if famous brands had regular fonts? Meet RegulaBrands! </strong>
                   <br />
                   <span className="text-muted">I’ve worked in UX for the better part of a decade. F..</span>
                </p>

                <img className="position-absolute py-2 moreOptions" src={moreOption} alt="more options"/>

                <div className="bottom">
                  <img src={person1} alt="person 1" />
                  <p className="lead fs-6 px-2 py-sm-2 name">Sarthak Kamra</p>
                  <p className="text-muted px-2 py-sm-2 views">
                    <img src={viewsSVG} className="d-none d-sm-inline" alt="views"/>
                    <span className="px-sm-1">1.4k views</span>
                  </p>
                  <button type="button" style={{ background: "#F1F3F5" }} className="btn btn-light shareBtn">
                    <img src={shareSVG} alt="share"  />
                    <span className="fs-6 px-2 fw-lighter d-sm-none">Share</span>
                  </button>
                </div>

            </div>
        </div>


    </section>
  )
}

export default PostBody