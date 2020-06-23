import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../../store';
import { change } from 'redux-form';


const InptFile = ({input, meta, ...props}: any) => {
  console.log('12312124235678')
  const [img, setImg] = useState<any>();
  const downloadFile = (event: any) => {
    // const reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload = (e) => {
    //   // props.initial.fileData.push(e.target!.result);
    //   console.log(e.target?.result)
    //   if (e.target!== null && e.target.result!==null) {
    //     setImg(e.target?.result);
    //   }
    //   const a = e.target?.result
    //   let formData = new FormData();
    // //   if (a!==null && a!==undefined){
    //     formData.append('file', event.target.files[0]);
    // //   }
    // console.log(formData)
    //   axios({
    //     method: 'POST',
    //     url: `http://localhost:5000/upload`,
    //     data: formData,
    //     headers:{'Content-Type': 'multipart/form-data', 'Accept': '*/*'},
        
    //   }).then((response) => {console.log(response)}).catch((error) => {console.log(error)})

    // };
    // // reader.onloadend = (e) =>{
    // //   console.log(e.target)
    // // }


  };
  // useEffect(() => {
  //   // console.log(props);
  //   // if (props.initial.fileData[0]) {
  //   //   setImg(props.initial.fileData[0]);
  //   // } else {
  //     setImg('');
  //   // }
  // }, [setImg]);
     const submit = (event:any) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    const file = event.target.result;
    axios({
      method: 'POST',
      url: `http://localhost:5000/upload`,
      data: {file:file}
    }).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
  }
  return (
    <div>
      <div>
        <input onChange={downloadFile}  name="File" type="file" accept=".jpg, .png, .jpeg" />
      </div>
      <button onClick={submit} >jngfdjh</button>
      <img className="logoImg"  />
    </div>
  );
};

 const mapStateToProps = (state: any) => ({ ...state.form.writing });

 export default connect(mapStateToProps, null)(InptFile);
// export default InptFile