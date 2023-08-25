import "./Homepage.css";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeList from "../EmployeeList/EmployeeList";

function Homepage() {
  return (
    <div className="Homepage">
      {" "}
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
export default Homepage;
