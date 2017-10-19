import React, { Component } from 'react';

const Numbers = (props) => {
  console.log(props);
  const numH5 = props.nums.map(num => <h5> {num} </h5>);
  const total = props.nums.reduce( (a,b) => a+b, 0)
  return (
    <div>
      {numH5}
      { total }
    </div>
  )
}


export default Numbers;
