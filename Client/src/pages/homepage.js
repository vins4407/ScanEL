import "../style/homepage.css";
import { Search } from "../component/search";
import Navbar from "../component/navbar";

function Homepage() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Search />
      </div>
    </div>
  );
}
export default Homepage;