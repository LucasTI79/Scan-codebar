export const validateForm = (cb?: CallableFunction) => {
  if(document.forms[0]) {
    const values = Array.from(document.forms[0])
                  .map((formitem: any ) => formitem.attributes["type"].value === 'text' && formitem );
    for (let el of values){
      if(el){
        if(!el.value){
          alert(`Por favor preencha o campo ${el.attributes["name"].value}`)
          break
        }
        {cb && cb()}
      }
    }
  }
}