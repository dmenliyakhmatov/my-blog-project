import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ImageIcon from '@material-ui/icons/Image';

const InptFile = ({input, meta, ...props}: any) => {

  const handleClick = () => {
    props.fileRef.current.click()
  }

  return (
    <div>
      <div>
        <input ref={props.fileRef} name="File" type="file" accept=".jpg, .png, .jpeg" className="hidden-input"/>
      </div>
      <Button
        variant="outlined"
        color="default"
        startIcon={<ImageIcon />}
        onClick={handleClick}
        className="btn-img"
      >
       Прикрепить обложку
      </Button>
      {/* <img className="logoImg"  /> */}
    </div>
  );
};

 const mapStateToProps = (state: any) => ({ ...state.form.writing });

 export default connect(mapStateToProps, null)(InptFile);
// export default InptFile