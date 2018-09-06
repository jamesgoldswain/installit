import * as React from 'react'
import config from '../../src/Config/menu.json'
import MenuComponent from './Menu'
import SelectionComponent from './Selection'


interface IOptions {
    items: IOptionItem[]
}

interface IOptionItem {
    name: string,
    value: string
}

interface IState {
    item?: string
}

const getInitialItem = (props: IState) => props.item ? props.item : "Please select an option"

const options:IOptions = config as IOptions;

export default class WelcomeComponent extends React.PureComponent<IState> {

    public readonly state = { item: getInitialItem(this.props) };

    public selectOption = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({item : event.target.value})
    }

    public render() {
        return (
        <div>
            <MenuComponent options={options.items.map(x => x.name.toString())} onSelectedItem={this.selectOption}/>
            { this.state.item && <SelectionComponent item={this.state.item } /> }
        </div>
        );
    }
}