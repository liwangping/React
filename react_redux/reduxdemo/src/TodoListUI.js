import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUI = (props) => {
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange={props.changeInputValue}
                        value = {props.inputValue}
                        />
                    <Button 
                        type="primary"
                        onClick = {props.clickBtn}>
                            增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={props.list}
                        renderItem={(item,index)=>(<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
                        //注意这个方法用了箭头函数
                    />    
                </div>
            </div>
         );
}
 
export default TodoListUI;