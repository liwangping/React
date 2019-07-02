import React, { Component } from 'react'

class App extends Component {
    componentDidMount(){
        console.log('mount')
    }
    render() { 
        return ( 
            <>
            <div>Header</div>
            <hr/>
            <hr/>

            <div>Footer</div>
            </>
         );
    }
}
 
export default App;