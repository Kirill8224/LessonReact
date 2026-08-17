export function reducer(num: number, acent: string){
  if(acent === 'inc'){
    return(num + 1)
  }
  if(acent === 'dec'){
    return(num - 1)
  }
  if(acent === 'res'){
    return(0)
  }
  else{
    return(num)
  }
}