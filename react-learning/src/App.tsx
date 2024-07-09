import "./App.css";
// import Card from "./component/card/card";
// import Hook from "./component/card/hooks/hook";
import WeatherApp from "./component/card/weather/weather";


// interface IuserList {
//   name: string;
//   age: number;
// }
function App() {
  // const userList: IuserList[] = [
  //   { name: "Newton", age: 20 },
  //   { name: "Kam", age: 20 },
  //   { name: "Tonkla", age: 20 },
  // ];

  return (
    <>
      <div className="container">
        {/* {userList.map((value)=>{
          return <Card name={value.name} age={value.age}/>
        })}
        <Hook/> */}
        
        <WeatherApp/>
      </div>
      
    </>
  );
}

export default App;
