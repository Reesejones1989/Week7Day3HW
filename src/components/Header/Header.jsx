import "./Header.css";

function Header(props) {
  return (
    <div className="Header"> {props.title}
      {/* <h3>Employee Directory</h3> */}
    </div>
  );
}
export default Header;
