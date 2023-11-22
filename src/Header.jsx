import logo from "./images/reactLogo.png";

export default function Header() {
  return (
    <div className="py-3 my-3">
      <div
        className="pt-3 py-1 pl-2 text-center "
        style={{ background: "black" }}
      >
        <img
          src={logo}
          alt="react-logo"
          style={{ height: "35px", verticalAlign: "top" }}
        ></img>
        <span className="h1 pt-4 text-white-50 border-bottom border-white">
          COUNTER GAME
        </span>
        <p className="h4 pt-4 text-white-50">Attack and Defend</p>
      </div>
    </div>
  );
}
