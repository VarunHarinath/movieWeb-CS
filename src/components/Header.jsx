import "../styles.css";
import logo from "../../public/images/logo.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="logo" />
        <h1>Wecolme to Popcorn movie</h1>
      </div>
    </>
  );
};
export default Header;
