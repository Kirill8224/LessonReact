import { afterEach, expect, test,  describe, vi } from "vitest";
import { newReducer, reducer } from "./useCounter";
import { generateId } from './useCounter';
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
describe('.not', ()=>{
    test('Kiril no', ()=>{expect(names).not.toBe('Kirill')})
    test('Anna no', ()=>{expect(names).not.toBe('Anna')})
    test('Max no', ()=>{expect(names).not.toBe('Max')})
})
test('no reducer', ()=>{expect(reducer(state, 'inc')).not.toEqual({...state, age: 20})})
test('reducer new', ()=>{
    message= 'Kirill'
    expect(newReducer(message, {type: 'new', payload: 'How are you'})).toBe('How are you')
})
test('message is clean', ()=>{
    expect(message).toBe('clean')
})

function addTodo(title: string, onAdded: () => void){console.log(title)
     onAdded()}
const onUser= vi.fn()
test('вызвали ли onAdded в addTodo', ()=>{
    addTodo('buy to product', onUser)
    expect(onUser).toHaveBeenCalled()
})

const attempt= vi.fn()
function connectToServer(onAttempt: () => void) {
  let attempts = 0;
  while (attempts < 4) {
    onAttempt();
    attempts++;
  }
}
test('сколько раз вызвали onAttempt в connectToServer', ()=>{
    connectToServer(attempt)
    expect(attempt).toHaveBeenCalledTimes(4)
})

function WelcomeUser(name: string, logGreeting: (text: string) => void) {
  const result = `Hello, ${name}!`;
  logGreeting(result);
}
test('какие аргуенты получила logGreeting в WelcomeUser', ()=>{
    const Greet= vi.fn()
    WelcomeUser('Kirill', Greet)
    expect(Greet).toHaveBeenCalledWith('Hello, Kirill!')
})

function showWarningMessage(count: number) {
    if (count > 10) {
      console.warn('Too many items!');
    }
  }
test('сколько раз вызовется console.warn в showWarningMessage', ()=>{
    const spy= vi.spyOn(console, 'warn')
    showWarningMessage(15)
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
})  


import { isAdult } from './age-check';
export function enterClub() {
  if (isAdult()) {
    return 'Welcome';
  } else {
    return 'Go home';
  }
}
vi.mock('./age-check', ()=>{
    return({
        isAdult: ()=>0
    })
})
test('vi.mock: enterclub', ()=>{
    const result= enterClub()
    expect(result).toBe('Go home')
})
