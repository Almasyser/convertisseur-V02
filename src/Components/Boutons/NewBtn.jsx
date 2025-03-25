import { useState } from "react";
import "./newbtn.css";
function NewBtn ({index, result, setResult}) {
  const [state, setState] = useState(false);
  const handleToggle =()=>{
    let copyResult = [...result];
    copyResult[index] = !state;
    copyResult && setResult(copyResult);
    setState(!state);
  }
  return(
    <>
      <div className="btn" onClick={()=>handleToggle(index)}>
        {state?
          <>
            <div className="btn-on">1</div>
            <div className="btn-off">0</div>
          </> :
          <>
            <div className="btn-off">1</div>
            <div className="btn-on">0</div>
          </>
        }
      <div className="btn-index">{result.length - index}</div>
      <div className="btn-pow">{Math.pow(2, result.length-index-1)}</div>
    </div>
    </>
  )
}
export default NewBtn;