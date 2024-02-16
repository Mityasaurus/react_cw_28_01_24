import React from "react";
import { NavLink } from "react-router-dom";
import s from "../style/header.module.css";
import { FormControlLabel, Switch } from "@mui/material";
import { useApp } from "../utils/context";

export default function Header() {
  const { toggleTheme } = useApp();
  return (
    <header>
      <h1>Maxvel</h1>
      <nav>
        <NavLink className={s.Link} to="/news">
          News
        </NavLink>
        <NavLink className={s.Link} to="/weather">
          Weather
        </NavLink>
        <NavLink className={s.Link} to="/blog">
          Blog
        </NavLink>
      </nav>
      <FormControlLabel
        className={s.themeSwitch}
        control={<Switch onChange={toggleTheme} />}
        label="Switch theme"
      />
    </header>
  );
}
