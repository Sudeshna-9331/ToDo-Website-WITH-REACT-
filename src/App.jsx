import React, { useState } from 'react';


const App = () => {
    const [inputList, setInputList] = useState("");
    const [listArr, setListArr] = useState([]);



    const itemEvent = (e) => {

        setInputList(e.target.value);

    };

    const itemList = (e) => {
        setListArr((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList(" ");
    };

    const deleteItems = (e) => {
        
        let id = e.target.id;

        console.log(id);

        setListArr((oldItems) => {
            return oldItems.filter((elem, index) => {
                console.log("deleted");
                if(index != id){
                    return elem;
                }
                

            });
        });


    };

    return <>
        <div className="outer_div">
            <div className="inner_div">
                <h1>To Do List</h1>
                <input type="text" placeholder="Add an item" onChange={itemEvent} />
                <button onClick={itemList}><span className="add"> + </span></button>
                <div className="list">
                    <ol>
                        {
                            listArr.map((item, index) => {

                                return <>
                                    <div className="todo_list">

                                        <li > <button className="delete"
                                            id={index}
                                            key={index}
                                            text={item} onClick={deleteItems}> X </button> {item}</li>

                                    </div>
                                </>
                            })
                        }
                    </ol>
                </div>
            </div>

        </div>
    </>

}
export default App;