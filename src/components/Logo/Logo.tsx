import logo from "./../../../public/logo.png";

function Logo() {
  return (
    <>
      <div className="flex basis-1/4 pl-20 items-center">
        <img src={logo} alt="" />
        <span className="text-2xl ml-3">Portfolio</span>
      </div>
    </>
  );
}

export default Logo;
