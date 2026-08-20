import { afterEach, expect, test, beforeAll, beforeEach, describe } from "vitest";
import { newReducer, reducer } from "./useCounter";
let message: string= ''
afterEach(()=>{message= 'clean'})
const state= {name: 'Alex', age: 20}
const names= ['Alex', 'Misha', 'Bibi']
describe('reducer', ()=>{
    test('test inc', ()=>{
        expect(reducer(state, 'inc')).toEqual({...state, age: 21})
    })
    test('test dec', ()=>{
        expect(reducer(state, 'dec')).toEqual({...state, age: 19})
    })
    test('test res', ()=>{
        expect(reducer(state, 'res')).toEqual({...state, age: 0})
    })
})
describe('test names', ()=>{
    test('Alex',()=>{expect(names).toContain('Alex')})
    test('Misha', ()=>{
        expect(names).toContain('Misha')
    })
    test('Bibi', ()=>{expect(names).toContain('Bibi')})
})

test('reducer new', ()=>{
    message= 'Kirill'
    expect(newReducer(message, {type: 'new', payload: 'How are you'})).toBe('How are you')
}
)
test('message is clean', ()=>{
    expect(message).toBe('clean')
})


