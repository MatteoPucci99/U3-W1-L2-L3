import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList books={scifi} />
      <MyFooter />
    </div>
  );
}

export default App;
