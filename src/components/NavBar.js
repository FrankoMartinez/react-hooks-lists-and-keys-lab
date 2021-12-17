import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTag = links.map((link) => {
  return <a key={link} href={'#' + link}>{link}</a>
  })
  return <nav>{aTag}</nav>;
}

export default NavBar;
