import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Counter from '../components/Counter'

it('renders our starting count',()=>{
    const {container} = render(<Counter />)
    expect(container.textContent).toContain("You've clicked 0 times!")
})

it('When button is clicked the count is incremented', ()=>{
    const {container, getByTestId} = render(<Counter/>)
    const button = getByTestId('counter-button')
    expect(container.textContent).toContain("You've clicked 0 times!")
    fireEvent.click(button)
    expect(container.textContent).toContain("You've clicked 1 times!")
})