import {add} from '../utils/functions'

test('Add returns the sum of two numbers', ()=>{
    expect(add(1,2)).toBe(3)
})

test('Add handles string inputs that are numbers', ()=>{
    expect(add('1','2')).toBe(3)
})

test('Add returns NaN if non numbers are passed in',()=>{
    expect(add('I','farted')).toBeNaN();
})