import classes from "../assets/styles/Header.module.css";
import logo from "../assets/images/logo2.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};
export default Header;
