type nums= {
  name: string,
  age: number
}
export function reducer(num: nums, acent: string){
  if(acent === 'inc'){
    return({name: num.name, age: num.age + 1})
  }
  if(acent === 'dec'){
    return({name: num.name, age: num.age - 1})
  }
  if(acent === 'res'){
    return({name: num.name, age: 0})
  }
  else{
    return({name: num.name, age: num.age})
  }
}
