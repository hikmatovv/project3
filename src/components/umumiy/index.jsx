
// import React from "react";

// import { useRoutes } from "react-router-dom";
// import { routes } from "../../routes/routes";

import rasm from "../../assets/header.jpg";
import Navbar from "../../components/umumiy/Navbar/index";
// import Header from "../../components/umumiy/Header/index";
// import About_Us from "../../components/umumiy/About_Us/index";
// import Team from "../../components/umumiy/Team/index";
// import Partner from "../../components/umumiy/Partner/index";
// import Number from "../../components/umumiy/Number/index";
// import Twice from "../../components/umumiy/Twice/index";
// import Footer from "../../components/umumiy/Footer/index";

// export default () => {
//   const content = useRoutes(routes);
//   return (
//     <>
//       {/* {content} */}
//     </>
//   );
// };

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <div style={{ backgroundColor: "#F0F2F5" }}>
        <Container
       
        >
          <Navbar />
          
        </Container>
      

        {/* <Container>
          <Footer />
        </Container> */}
      </div>
    </React.Fragment>
  );
}
