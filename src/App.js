import './App.css';


function App() {
  return (
    <div className="App bg-dark" style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <p className="text-light fs-3 bg-primary px-3"
        style ={{
          borderRadius: "8px"
        }}
      >This is react</p>
    </div>
  );
}

export default App;
