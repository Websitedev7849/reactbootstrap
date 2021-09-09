import './App.css';

import Header from "./components/Header";
import PostCategory from "./components/PostCategory";
import PostBody from "./components/PostBody";


function App() {

  const posts = [
    {
      post: "./images/post 1.png",
      cardTitle: "✍️ Article",
      article: " What if famous brands had regular fonts? Meet RegulaBrands! ",
      textMuted: "I’ve worked in UX for the better part of a decade. F..",
      personPhoto: "./images/person1.png",
      name: "Sarthak Kamra",
      views: "1.4k views"
    },
    {
      post: "./images/post 2.png",
      cardTitle: "🔬️ Education",
      article: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      textMuted: "I’ve worked in UX for the better part of a decade. F..",
      personPhoto: "./images/person2.png",
      name: "Sarah West",
      views: "4.8k views"
    }
  ]

  return (
    <div className="App container-fluid">
      <Header/>

      <section className="container-fluid postBody">
       
       <PostCategory />

       <PostBody info = {posts[0]} />
       <PostBody info = {posts[1]} />


      </section>

    </div>
  );
}

export default App;
