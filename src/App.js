import './App.css';

import Header from "./components/Header";
import PostCategory from "./components/PostCategory";
import PostBody from "./components/PostBody";


function App() {


  return (
    <div className="App container-fluid">
      <Header/>

      <section className="container-fluid postBody">
       
       <PostCategory />

       <PostBody />

      </section>

    </div>
  );
}

export default App;
