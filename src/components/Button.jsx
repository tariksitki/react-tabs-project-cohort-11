import React from 'react'

const Button = ({item, setValue, index, value}) => {
    // console.log(item);
    // console.log(setValue);
  return (
    <button
        
      onClick={() => setValue(index)}
      className={`job-btn ${index === value && "active-btn"} `}
    >
      {item.company}
    </button>
  );
}

export default Button;