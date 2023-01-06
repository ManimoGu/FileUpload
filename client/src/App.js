import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios"

function App() {
  const [fileInfo,setFileInfo] = useState()

  const sendfile = () =>{
    const file = new FormData()
    file.append("image", fileInfo)
    
    console.log(fileInfo)
    axios.post("http://localhost:9000/getfile", file)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.data))

  }

  return (
    <div className="App">
      <input type="file"  onChange={(e)=> setFileInfo(e.target.files[0])}/>
      <button onClick={()=>sendfile()}>valider</button>
    </div>
  );
}

export default App;
