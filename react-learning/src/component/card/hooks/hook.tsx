import { useEffect, useState } from "react"

export default function Hook(){
    
    //ค่าที่เปลี่ยน
    const[count,setCount] = useState<number>(0)


    useEffect(()=>{
        console.log("Start Render")
    },[count])


    return <>
        hook component
        <button onClick={()=>setCount(prev => prev+1)}>clickme</button>
        <div>prev = {count}</div>
    </>
}