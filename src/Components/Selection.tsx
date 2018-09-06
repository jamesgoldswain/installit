import * as React from 'react'

export interface ISelectedItemProps {
    item: string
}

const SelectionComponent = ({ item }: ISelectedItemProps) => (
    <div>{item}</div>
)
  
export default SelectionComponent