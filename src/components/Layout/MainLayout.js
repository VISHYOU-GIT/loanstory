import React from "react";
import { MainFooter } from "../Footer";
import {MainNavbar} from '../Navbar'
function MainLayout({children}) {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
}

export default MainLayout;
