import React, { useState, useEffect } from 'react'
import '../style1.css'

function TodoAdv() {
    //To get data from local storage
    const getLocalData = () =>{
        const lists = localStorage.getItem("MyTodo") ;

        if(lists){
            return JSON.parse(lists)
        }
        else{
            return [];
        }
    }

    const [inputdata, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditedItem, setIsEditedItem] = useState("")
    const [togglebutton, setToggleButton] = useState(false)

    //To store the list on local storage, even if we refresh the page, the list will be there on you Todo
    //all parameter of local storage should be in a string, that's why we use JSON.strimgify method
    useEffect(()=>{
        localStorage.setItem("MyTodo", JSON.stringify(items));   
    },[items]) 

    //Function to Add Items
    const addItems = ()=>{
        if(!inputdata){
            alert("Plz Enter Something...")
        }
        else if (inputdata && togglebutton){
            setItems(
                items.map((curElem)=>{
                if(curElem.id === isEditedItem){
                return {...curElem, name:inputdata}
                }
            return curElem;
            })
            );
        setInputData("")
        setIsEditedItem(null)
        setToggleButton(false)
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata
            }
            setItems([...items, myNewInputData]);
            setInputData("")
        }
        console.log(items)
    }

    //Delete an Item from List
    const deleteItem = (index) =>{
        const updatedList = items.filter((curElem)=>{
            return curElem.id !== index;
        })
        setItems(updatedList)
    }

    //Edit an Item which is listed on Todo
    const editItem = (index) =>{
        const item_todo = items.find((curElem)=>{
            return curElem.id === index;
        });
        setInputData(item_todo.name)
        setIsEditedItem(index)
        setToggleButton(true)

    }


    //Function to remove all list
    const removeAll = () =>{
        setItems([])
    }

  return (
    <>
    <div className='main'>
        <div className='child-div'>
            <figure>
                <img src='./imgs/todoImage.jpg' alt='loading....' className='TodoImage'></img>
                <figcaption>✍ Write Your Todo Here</figcaption>
            </figure>
            <div className="addtems">
                <input type="text" placeholder="✍ Add Item" value={inputdata}
                onChange={(event) => setInputData(event.target.value)}>


                </input>
                {
                    togglebutton? <i className="fa-solid fa-pen-to-square" onClick={addItems}></i> : <i className="fa-solid fa-plus" onClick={addItems}></i>
                }
                
            </div>
            <div className='showItems'>
                        {
                            items.map((curElem)=>{
                                return(
                                        <div className='eachItem' key={curElem.id}>
                                            <h3>{curElem.name}</h3>
                                            <div className='todo-btn'>
                                            <i className="fa-solid fa-pen-to-square" onClick={()=>editItem(curElem.id)}></i>
                                            <i className="fa-solid fa-trash" onClick={()=>deleteItem(curElem.id)}></i>
                                            </div>
                                        </div>
                                )
                            })
                        }
            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}><span>CHECK LIST</span></button>
            </div>

        </div>
    </div>
    </> 
 
)
}

export default TodoAdv