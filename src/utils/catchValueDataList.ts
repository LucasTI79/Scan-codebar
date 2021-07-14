import { Dispatch } from "react";

export const catchValue = (inputId: string, cboId: string, setState: Dispatch<any> ) => {
  const value = document.getElementById(inputId) as HTMLInputElement;
  const cbo = document.getElementById(cboId) as HTMLDataListElement;
  const opts = cbo.childNodes;

  for(let i = 0; i < opts.length; i++){
    //@ts-ignore
    if(opts[i].value === value.value){
      //@ts-ignore
      setState(opts[i]) 
      break
    }
  }
}