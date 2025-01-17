import { useState } from 'react'
import './weather.css'
import axios from 'axios'

export interface Imain{
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
    sea_level:  number;
    grnd_level: number;
}

export interface IdisplayData{
    name : string
    main : Imain
}
export default function WeatherApp(){

    const [input,setInput] = useState<string>("")
    const [data,setData] = useState<IdisplayData | null>(null)
    
    const searchCity = async()=>{
        try{
            const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=939331614a46dc1ed6d75ac3f10ff99c`)
            console.log(data.data)
            const Payload:IdisplayData = {
                name : data.data.name,
                main : {
                    temp : data.data.main.temp,
                    feels_like: data.data.main.feels_like,
                    temp_min:   data.data.main.temp_min,
                    temp_max:   data.data.main.temp_max,
                    pressure:   data.data.main.pressure,
                    humidity:   data.data.main.humidity,
                    sea_level:  data.data.main.sea_level,
                    grnd_level: data.data.main. grnd_level,
                    
                }
            }
            const x = Payload.main.temp.toFixed(2) 
            console.log(Payload)
            setData(Payload)
        }catch(error){
            console.log(error)
            alert("ไอ่โง่ไม่มีเมือง")
        }
        console.log(`fetching ${input}`)
    }
    
    return <>
        <div className='Weather'>
            <div className='Box'>
                <div className='searchText'>
                    <label htmlFor='city'>Enter City Name </label>
                    {/* เอาGetstateมารับค่า onchange   */}
                    <input className='Input' onChange={(event)=>{setInput(event.target.value)}} id='city'></input>
                    <button className='button' onClick={()=>{searchCity()}}><span>Search </span></button>
                </div>

                {data != null ?<>
                    <h1>{data.name} City</h1>
                    <img className='image' src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'/>
                    <h3>temperature = {data.main.temp - 273.15} °C</h3>
                    <h3>feels like = {data.main.feels_like - 273.15} °C</h3>
                    <h3>temperature min = {data.main.temp_min- 273.15} °C</h3>
                    <h3>temperature max = {data.main.temp_max- 273.15} °C</h3>
                </>:<>
                    <h2>No city yet</h2>
                </>}

                
            </div>
        </div>
    </>
}