import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useApp } from "../utils/context";

export default function Layout() {
  const { isDarkMode } = useApp();
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
