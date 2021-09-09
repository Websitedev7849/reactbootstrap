import post1 from "../images/post 1.png";
import moreOption from "../images/more options.svg";

const PostBody = () => {
 
 
  return (
    <section className="d-flex flex-col justify-content-center align-items-center">
        
        <div className="card">
            <img src={post1} className="card-img-top" alt="post 1" />
            <div className="card-body position-relative">
                <h5 className="card-title small">✍️ Article</h5>
                <p className="card-text bold">
                   <strong className="text-break">  What if famous brands had regular fonts? Meet RegulaBrands! </strong>
                   <br />
                   <span className="text-muted">I’ve worked in UX for the better part of a decade. F..</span>
                </p>

                <img className="position-absolute moreOptions" src={moreOption} alt="more options"/>

            </div>
        </div>


    </section>
  )
}

export default PostBody