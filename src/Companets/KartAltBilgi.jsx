import React from "react";

function KartAltBilgi({image, Baslik,Deger}) {
    return (
        <div className="col-6 border p-2">
            {image}
            <p className="mb-0">{Baslik}</p>
            <p className="fw-bold">{Deger}</p>
        </div>
    );
}

export default KartAltBilgi;