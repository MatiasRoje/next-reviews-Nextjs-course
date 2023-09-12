import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink href="/" styles="font-orbitron font-bold">
            Indie Gamer
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
