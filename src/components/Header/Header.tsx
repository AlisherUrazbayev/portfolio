import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import SocialLinks from "../SocialLinks/SocialLinks";

function Header() {
  return (
    <>
      <header className="shadow-md flex justify-between min-h-[10vh]">
        <Logo />
        <Nav />
        <SocialLinks />
      </header>
    </>
  );
}

export default Header;
