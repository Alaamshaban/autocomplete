import React, { useState } from "react";
import Autocomplete from "./components/autocomplete";


const App = () => {
  const options = [
    { id: 1, value: "Apple" },
    { id: 2, value: "Banana" },
    { id: 3, value: "Orange" },
  ]

  const [suggestions, setSuggestions] = useState(options);
  const [value, setValue] = useState("");

  const completeMethod = (value) => {
    setValue(value)
    value !== '' ? setSuggestions(options.filter(option => option.value.toLowerCase().includes(value.toLowerCase()))) : setSuggestions(options)
  };


  return (
    <div>
      <Autocomplete
        suggestions={suggestions}
        getSuggestions={completeMethod}
        value={value}
      />
    </div>
  );
};

export default App;