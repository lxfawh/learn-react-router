import React from 'react'
import { Consumer } from './context'
export default class Route extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Consumer>
                {
                    state => {
                        console.log({ state })
                        // console.log(this.props)
                        let { path, component: Component } = this.props
                        let pathname = state.location.pathname
                        console.log({ path })
                        console.log({ pathname })
                        if (pathname === path) {
                            return <Component />
                        }
                    }
                }
            </Consumer>
        )
    }
}