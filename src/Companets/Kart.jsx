import 'bootstrap/dist/css/bootstrap.min.css';
import { GiWindsock } from "react-icons/gi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import KartAltBilgi from './KartAltBilgi';
import { useEffect, useState } from 'react';

export default function Kart({ Sehir }) {

  const [HavaDurumu, SetHavaDurumu] = useState()
  const Apiİletişim = () => {
    const api = "5c61e8da5758285a371b1d6105aea626"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${Sehir}&appid=${api}&units=metric&lang=tr`;
    fetch(apiURL)
      .then(response =>{ if (!response.ok) {
        // Hata kodunu kontrol ediyoruz
        throw new Error(`HTTP error! status: ${response.status}`);
      };
      return response.json()})
      .then(data => {
        SetHavaDurumu(data)
      })
      .catch(() => {
        SetHavaDurumu();
        alert("Hatalı şehir ya da sistemsel bir sorun daha sonra tekrar deneyin ")
      });

  }


  

  useEffect(() => { Apiİletişim(); }, [Sehir])

  return (
    HavaDurumu ? <div
      className="card text-center col-12 col-md-4 mb-3 ms-2 mt-3 kart"
      style={{
        width: "18rem",
        borderRadius: "15px",
        border: "1px solid black",
      }}
    >
      {/* Şehir İsmi */}
      <div className="card-header bg-white">
        <h5 className="fw-bold">{HavaDurumu.name}</h5>
      </div>

      {/* Sıcaklık ve Ana Görsel */}
      <div className="card-body">
        <img
          src={`http://openweathermap.org/img/wn/${HavaDurumu.weather[0].icon}@2x.png`}
          alt="Hava Durumu"
          className="mb-3"
        />
        <p className='fw-semibold text-capitalize' >{HavaDurumu.weather[0].description}</p>
        <h3 className="fw-bold">{HavaDurumu.main.temp}<TbTemperatureCelsius style={{fontSize: "24px"}} /> </h3>
      </div>

      {/* Alt Bilgiler */}
      <div className="card-footer bg-white">
        <div className="row">
          <KartAltBilgi image={<FaTemperatureHalf className='mb-2' style={{ fontSize: "32px" }} />} Baslik={"Hissedilen"} Deger={HavaDurumu.main.feels_like+"°C"} />
          <KartAltBilgi image={<WiHumidity className='mb-2' style={{ fontSize: "32px" }} />} Baslik={"Nem"} Deger={HavaDurumu.main.humidity+"%"} />
          <KartAltBilgi image={<GiWindsock className='mb-2' style={{ fontSize: "32px" }} />} Baslik={"Rüzgar hızı"} Deger={HavaDurumu.wind.speed+" km/h"} />
          <KartAltBilgi image={<GiPressureCooker className='mb-2' style={{ fontSize: "32px" }} />} Baslik={"Basınç"} Deger={HavaDurumu.main.pressure+" mbar"} />
        </div>
      </div>
    </div>: null           
  )
}