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
test('reducer, typ: dec', ()=>{
    const result= reducer({name: 'Kirill', age: 15}, 'dec')
    expect(result).toEqual({name: 'Kirill', age: 14})
})
test.each(
    [
        [{name: 'Bibi', age: 14}, {name: 'Bibi', age: 15}],
        [{name: 'Alex', age: 71}, {name: 'Alex', age: 72}],
        [{name: 'Brbr', age: 25}, {name: 'Brbr', age: 26}],
        [{name: 'Vlad', age: 54}, {name: 'Vlad', age: 55}],
    ])('reduce inc', (state, expected)=>{
        const result= reducer(state, 'inc')
        expect(result).toEqual(expected)
    }
)
test.each(
    [
        [{name:'Kirill', age: 15}, {name: 'Kirill', age: 14}],
        [{name:'Misha', age: 14}, {name: 'Misha', age: 13}],
        [{name:'Bibi', age: 71}, {name: 'Bibi', age: 70}],
    ])('reduce dec', (state, expected)=>{
        expect(reducer(state, 'dec')).toEqual(expected)
    })