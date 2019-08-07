import React from 'react'

const NumbersTable = (props) => {
  const number = () => {
    let res = [];
    const color = (index) => {
      return { backgroundColor: (index % 2 === 0) ? 'red' : 'white' }
    }
    for (let i = 1; i <= props.limit; i++) {
      res.push(<div className="tableDiv" key={i} style={color(i)}>{i}</div>);
    }
    return res;
  }

  return (
    <div className="table">
      {number()}
    </div>
  )
}

export default NumbersTable;