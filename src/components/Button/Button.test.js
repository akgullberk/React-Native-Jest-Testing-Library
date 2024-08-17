import {render} from '@testing-library/react-native'
import React from 'react'
import Button from './Button'

test('should match with snapshot', () => {
    const comp = render(<Button/>)
    expect(comp).toMatchSnapshot();
})

test('should render title correctly', () => {
    const testTitle = "test"
    const comp = render(<Button title={testTitle}/>)

    const buttonText = comp.getByTestId('button-title').children[0];
    expect(buttonText).toBe(testTitle)

    
    
    })