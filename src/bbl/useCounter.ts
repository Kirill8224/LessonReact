type nums= {
  name: string,
  num: number
}
export function reducer(num: nums, acent: string){
  if(acent === 'inc'){
    return({name: name, num: num.num + 1})
  }
  if(acent === 'dec'){
    return({name: name, num: num.num - 1})
  }
  if(acent === 'res'){
    return({name: name, num: 0})
  }
  else{
    return({name: name, num})
  }
}
