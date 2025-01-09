import { useState } from 'react'
import Form from './Companets/Form'
import './App.css'
import Bilgi from './Companets/Bilgi'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hakkında from './Companets/Hakkında';
function App() {

  const[Sehir,SehriGetir] = useState()
  return (
    <div className='mt-4' style={{justifyItems:"center"}} >
      <Form  SehriGetir= {SehriGetir}  />
      {Sehir && <Bilgi Sehir={Sehir}  />}
      <Hakkında/>
    </div>
  )
}

export default App
