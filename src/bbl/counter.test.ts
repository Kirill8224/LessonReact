import {test, expect} from 'vitest'
import {reducer} from './useCounter'
test('reducer setage', ()=> {
    const state= {name: 'Alex', age: 20}
    const result= reducer(state, {type: 'setName', payload: 'Misha'})
    expect(result).toEqual({name: 'Misha', age: 20})
})
test('reducer, typ: res', ()=>{
    const result= reducer({name: 'Kirill', age: 15}, 'res')
    expect(result).toEqual({name: 'Kirill', age: 0})
})