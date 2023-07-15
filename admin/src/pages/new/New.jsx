import './new.scss'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

function New({inputs, title}) {

  const [file, setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://consultix.radiantthemes.com/demo-eight/wp-content/themes/consultix/images/no-image-found-360x250.png"} alt="" />
          </div>
          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor='file'>
                Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type="file" id='file' onChange={e=> setFile(e.target.files[0])} style={{display: "none"}}/>
              </div>
              {inputs.map((input)=> (
                  <div className="formInput" key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input type={`${input.type}`} placeholder={`${input.placeholder}`} />
                </div>
              ))}
              
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New