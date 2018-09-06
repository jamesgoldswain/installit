import * as React from 'react'
import EveryoneComponent from './All';
import DeveloperComponent from './Developer';

export interface ISelectedItemProps {
    item: string,
    
}

const SelectionComponent = ({ item }: ISelectedItemProps) => (
     item === 'developer' ? <DeveloperComponent /> : <EveryoneComponent /> 
)
  
export default SelectionComponent