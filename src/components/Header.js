import logo from "../images/logo.png";
import searchIcon from "../images/search.png";


const Header = () => {

  return(
    <section
    className="container-fluid d-flex flex-row justify-content-space-around"
    style = {{
        width: "100vw"
    }}
    >
        <nav style={{
            background: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.12)"
        }} 
        className="container-fluid d-flex flex-row justify-content-between align-items-center px-4 py-2">

            <img style={{
                width: "162.57px",
                height: "24px"
            }} src={logo} alt="logo"/>

            <div className="searchBar position-relative w-25 d-none d-lg-block">
                <img className="position-absolute top-50 translate-middle-y"
                    style={{
                        left: "10px"
                    }}
                    src={searchIcon} alt="search icon" />

                <input className="form-control px-5" 
                style={{
                    width: "360px",
                    borderRadius: "20px",
                    background: "#F2F2F2",
                    color: "#5C5C5C",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "18px",
                }} type="text" placeholder="Search for your favorite groups in ATG" />
            </div>

            <p className="my-2 d-none d-lg-block"
            style={{
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
            }}>Create account. <a href="/"> It’s free! </a></p>

        </nav>
    </section>
  )
}

export default Header;