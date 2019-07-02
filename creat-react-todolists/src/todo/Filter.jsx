import React, { Component } from 'react'
class Filter extends Component {
    state = {}
    render () {
        return (
            <>
                filter:
                <button 
                onClick = {() => {toggleType('ALL')}}
                style={{color: filterType == 'ALL' && 'red'}}>all</button>
                <button
                onClick = {() => {toggleType('ACTIVE')}}
                style={{color: filterType == 'ACTIVE' && 'red'}}>active</button>
                <button 
                nClick = {() => {toggleType('COMPLETED')}}
                style={{color: filterType == 'COMPLETED' && 'red'}}>completed</button>
            </>
        )
    }
}
export default (state = 'ALL', action) => {
    if(action.type) {
        return action.type;
    }
    return state;
}
const mapStateToProps = (state) => ({
    filterType: state.filterType
})
const mapDispatchToProps = (dispatch) => {
    return {
        toggleType: type => dispatch({type})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)