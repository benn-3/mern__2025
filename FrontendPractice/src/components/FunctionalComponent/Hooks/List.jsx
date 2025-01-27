import { useState, useEffect } from "react";

const ListItems = ({ func }) => {
  var [numbers, setNumbers] = useState([]);
  useEffect(() => {
    setNumbers(func());
  }, [func]);
  return (
    <div>
      <h3>
        this number list as follow as according to the number present in the
        input box
      </h3>
      {numbers.map((number, index) => (
        <h4 key={index}> {number}</h4>
      ))}
    </div>
  );
};
export default ListItems;