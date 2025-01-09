import Kart from "./Kart";


export default function Bilgi({Sehir,SetKontrol} ) {
    
    return (
        <div className="row" style={{ justifyContent: "center" }}>
            <Kart Sehir={Sehir[0]} SetKontrol={SetKontrol} />
            <Kart Sehir={Sehir[1]} SetKontrol={SetKontrol}/>
            <Kart Sehir={Sehir[2]} SetKontrol={SetKontrol}/>
        </div>
    )
}

