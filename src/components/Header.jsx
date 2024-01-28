import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style/header.module.css"

export default function Header() {
  return (
    <header>
      <h1>Maxvel</h1>
      <nav>
        <NavLink className={s.Link} to="/news">News</NavLink>
        <NavLink className={s.Link} to="/weather">Weather</NavLink>
        <NavLink className={s.Link} to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
}
