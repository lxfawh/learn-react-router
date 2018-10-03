import React from 'react'
import { Consumer } from './context'
export default class Link extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (<Consumer>
            {state => {
                // console.log(this.props.to)
                return <a onClick={() => {
                    state.history.push(this.props.to)
                }}>
                    {this.props.children}</a>
            }}
        </Consumer>)
    }
}