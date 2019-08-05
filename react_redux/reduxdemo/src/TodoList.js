import React, { Component } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css'
import store from './store/index'
import {changeInputAction, addItemAction ,deleteItemAction, getListAction} from './store/actionCreator'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
                />
         );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d484d6d63a13f62ea2f3f48/redux/Getlist').then((res)=>{
            console.log(res)
            const data = res.data;
            const action = getListAction(data)
            store.dispatch(action)
        })
    }
    changeInputValue(e){//创建一个动作
        const action = changeInputAction(e.target.value)
        store.dispatch(action);//通过dispatch方法传递给store
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;