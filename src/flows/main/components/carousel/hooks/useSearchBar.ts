import { useState } from "react";

const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("busco a veces encuentro ", searchTerm);
  };

  const handleBlur = () => {
    setSearchTerm("");
  };
  return { searchTerm, handleChange, handleSearch, handleBlur };
};
export default useSearchBar;
