import React from 'react'
import { Provider } from './context'

export default class HashRouter extends React.Component {
    constructor() {
        super()
        this.state = {
            location: {
                pathname: '/'
            },
            history: {
                push(to) {
                    window.location.hash = to
                }
            }
        }
    }
    componentDidMount() {
        window.location.hash = window.location.hash.slice(1) || '/'
        window.addEventListener("hashchange", () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1) || '/'
                }
            })
        })

    }
    render() {
        // console.log(this.state)
        return (<Provider value={this.state}>
            {this.props.children}
        </Provider>)
    }
}