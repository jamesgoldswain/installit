import * as React from 'react'

export interface IOptionsProps {
    options: string[],
    onSelectedItem: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const MenuComponent = ({ options, onSelectedItem }: IOptionsProps) => (
    <ul>{ options.map((option) => <li key={option}><input type='radio' name='option' value={option} onChange={ onSelectedItem } />{option}</li>)}</ul>
)
  
export default MenuComponent