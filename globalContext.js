import { useState } from 'react'
function globalContext(contextID="fji4jh2342u423"){
    setctxID(contextID);
    const [ctxID,setctxID] = useState(contextID);
    function getValue(){
        return JSON.parse(window.localStorage.getItem(ctxID))
    }
    function setValue(jsonData){
        window.localStorage.setItem(ctxID,JSON.stringify(jsonData));
    }
  return {getValue,setValue};
}
export default globalContext
