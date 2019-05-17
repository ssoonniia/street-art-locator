import React from 'react';

const Button = props => {

  const buttonStyle ={
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    height: '5%',
    width: '15%',
    backgroundColor: '#2D9BF0',
    boxShadow: '4px 4px 19px 1px #000000'
  }
  const wrapper = {
    textAlign : 'center'
  }
  
  return(
    <div style={wrapper}>
      <button style={buttonStyle}
        className="btn btn-default"
      >
      Get Started
      </button>
    </div>
  );
}
export default Button; 