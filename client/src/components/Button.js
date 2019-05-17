import React from 'react';
import Button from '@material-ui/core/Button';

const HomeButton = props => {

  const buttonStyle ={
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
  }
  const wrapper = {
    textAlign : 'left',
    marginLeft: '20%'
  }

  return(
    <div style={wrapper}>
      <Button style={buttonStyle}variant="contained" color="primary" >
        Get Started
      </Button>
    </div>
  );
}
export default HomeButton; 