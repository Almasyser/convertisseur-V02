import { useState } from "react";
import NewBtn from "../Boutons/NewBtn";
import ConvertBooltoString from "../Utils/ConvertBooltoString";
import "./home.css";
import refrech from "../../assets/rafraichir.png";
function Home(){
  const sizeSwitch =[
    1,
    3,
    7,
    9
  ];
  const [result, setResult] = useState([]);
  const handleSelect =(el)=>{
    let i = 1;
    let newResult = [];
    setResult([]);
    while( i != parseInt(el+2) ){
      newResult && newResult.push(false);
      console.log("++++", i);
      i++;
    }
    setResult(newResult);
  }
  return(
    <div className="container">
      <div className="header">
        <div className="circle"></div>
        <p className="title">Switch and Show<br /></p>
      </div>
      <p className="subtitle">- Choisissez le nombre de switch du module à repérer.<br />- Positionnez les switch pour lire l'adresse.</p>
      <div className="bits-container">
          <p className="comments">Nombre de switch:</p>
        {sizeSwitch && sizeSwitch.map((el,index)=>{
          return(
            <button key={index} type="radio" className="btn-size" onClick={()=> handleSelect(el)}>{el+1}</button>
          )
        })}
      </div>
      <div className="result-container">
        <div className="result-box">
          {result.length? <ConvertBooltoString result={result} />: null}
        </div>
        <button type="button" className="btn-refrech" onClick={()=> handleSelect(-1)}><img src={refrech} /></button>
      </div>
      <div className="btn-container">
        {result && result.map((_,index)=>{
          return(
            <NewBtn key={index} index={index} result={result} setResult={setResult} />
          )
        })}
      </div>
    </div>
  )
}
export default Home;