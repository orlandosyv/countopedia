import logo from "./images/reactLogo.png";

export default function Header() {
  return (
    <div>
      <div
        className="pt-3 py-1 pl-2 text-center"
        style={{ background: "black" }}
      >
        <img
          src={logo}
          alt="react-logo"
          style={{ height: "35px", verticalAlign: "top" }}
        ></img>
        <span className="h1 pt-4 text-white-50 border-bottom border-white">
          React Course: Countopedia
        </span>
      </div>
    </div>
  );
}
