export function sum(a: number, b: number) {
  return(a + b)
}
type nums= {
  name: string,
  age: number
}
type acentTy= {
  type: string,
  payload: number | string
}
export function reducer(num: nums, acent: string | acentTy ){
  if(acent === 'inc'){
    return({...num, age: num.age + 1})
  }
  if(acent === 'dec'){
    return({...num, age: num.age - 1})
  }
  if(acent === 'res'){
    return({...num, age: 0})
  }
  if(typeof acent === "object"){
    if(typeof acent.payload === 'number'){
      if(acent.type === 'setAge'){
        return({...num, age: acent.payload})
      }
      else{
        return({...num})
      }
    }
    if(typeof acent.payload === 'string'){
      if(acent.type === 'setName'){
        return({...num, name: acent.payload})
      }
      else{
        return({...num})
      }
    }
    else{
      return({...num})
    }
  }
  else{
    return({...num})
  }
}