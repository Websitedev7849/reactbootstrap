import './App.css';

import Header from "./components/Header";


function App() {

  const changeLinkStyle = (e) => {
    console.log(e.target);
    const catLinks = document.querySelectorAll(".catLink");
    catLinks.forEach(l => {

    })
  };


  return (
    <div className="App container-fluid">
      <Header/>

      <section className="container-fluid postBody">
       
        <div className="container-fluid h-100 d-flex justify-content-between justify-content-sm-start postCategory">
          <a className="h5 my-3 mx-3 catLink text-dark" onClick={changeLinkStyle} href="/all-post"> Posts(368) </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" onClick={changeLinkStyle} href="/article"> Article </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" onClick={changeLinkStyle} href="/event"> Event </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" onClick={changeLinkStyle} href="/education"> Education </a>
          <a className="h5 my-3 mx-3 d-none d-sm-block catLink" onClick={changeLinkStyle} href="/job"> Job </a>



          <div class="dropdown my-2 d-sm-none filter">
            <button class="btn btn-secondary dropdown-toggle text-dark filterBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Filter: All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/">Article</a></li>
              <li><a class="dropdown-item" href="/">Event</a></li>
              <li><a class="dropdown-item" href="/">Education</a></li>
              <li><a class="dropdown-item" href="/">Job</a></li>
            </ul>
          </div>
        
        </div>

      </section>

    </div>
  );
}

export default App;
