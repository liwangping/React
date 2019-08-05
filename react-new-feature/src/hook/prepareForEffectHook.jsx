import React, { Component } from 'react';
class PrepareForEffectHook extends Component {
    state = { 
        count: 0,
        size: {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
     }
     handleResize = () => {
         this.setState({
             size:{
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
             }
         })
     }
     componentDidMount() {
         document.title = this.state.title;
         window.addEventListener('resize', this.handleResize)
     }

     componentDidUpdate() {
         document.title = this.state.count;
     }
     componentWillMount() {
         window.removeEventListener('resize', this.handleResize)
     }
    render() { 
        const {count, size} = this.state;
        return ( 
            <>
            <button 
            onClick = {() => {
                this.setState({
                    count: count + 1
                })
            }}
            >
                click: {count},
                size: {size.width} x {size.height}
            </button>
            </>
         );
    }
}
 
export default PrepareForEffectHook;