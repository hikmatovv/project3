import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Footer from '../../components/umumiy/Footer'
import Navbar from '../../components/umumiy/Navbar'

export default () => {
  const content = useRoutes(routes);
  return <>
  <Navbar/>


  {content}
  <Footer/>
  </>;
};
