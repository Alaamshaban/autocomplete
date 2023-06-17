import React, { useState } from "react";
import Autocomplete from "./components/autocomplete";


const App = () => {
  return (
    <div>
      <Autocomplete
        url='http://universities.hipolabs.com/search?country=United+States'
      />
    </div>
  );
};

export default App;