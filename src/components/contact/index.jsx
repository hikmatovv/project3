import React from "react";

import Header from "./top/index";
import Body from "./twice/index";

const index = () => {
  return (
    <div style={{marginTop:'2%'}}>
      <div style={{backgroundColor:'#A745FF'}}>
      <Header />
      </div>
      <Body />
    </div>
  );
};

export default index;
