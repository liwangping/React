import React,{Component} from 'react';
import ReactContext from './RouterContext';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }
    }
    render() { 
        return ( 
            <ReactContext.Provider 
            children = {this.props.children}
            value={{
                history: this.props.history,
                location: this.state.location
                //location会重新渲染页面
            }}
            />
         );
    }
}
 
export default Router;