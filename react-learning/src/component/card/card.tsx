import './card.css'
interface ICardProps{
    name : string
    age : number
}
export default function Card(props:ICardProps){
    return<>
        <div className="card">
            <div>{props.name}</div>
            <div>age : {props.age}</div>
        </div>
    </>
}