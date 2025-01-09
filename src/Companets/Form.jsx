import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Form({ SehriGetir }) {
    const [Sehir, setSehir] = useState("")
    const[Sehirler,SetSehirler]= useState(["İstanbul","Ankara","İzmir"])

     const Deneme = async (e)=>{
        e.preventDefault();
        setSehir(Sehir)
        SetSehirler(()=>[Sehir,Sehirler[0],Sehirler[1]]);
       
    }
    useEffect(()=>{SehriGetir(Sehirler);}, [Sehirler])
    
    

    return (
        <div style={{ justifyItems: "center"}}>
        <form method="post" className="Form" onSubmit={Deneme} style={{ justifyItems: "center"}}>
            <input value={Sehir} onChange={(e) => setSehir(e.target.value)} type="text" name="sehirIsmi" id="sehirIsmi" />

            <button type="submit" > <CiSearch style={{fontSize: "20px"  }} /> </button>
        </form>
        </div>
    )

}