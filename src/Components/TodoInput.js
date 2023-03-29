import React, {useState, useRef, useEffect} from 'react'

function TodoInput(props) {
    const inputRef = useRef(null)
    const [inputText, setInputText] = useState('')
   useEffect(()=>{
    inputRef.current.focus()
   },[])
   
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
   
    return (
        <div>
            <input type='text' ref={inputRef} placeholder='Enter your Todo' className='input-container' 
            value={inputText} onChange={e=>{setInputText(e.target.value)}} onKeyDown={handleEnterPress}></input>
            
            <button className='plus-button' onClick={() =>{
                props.addList(inputText)
                setInputText("")
            }}>+</button>
            
        </div>
    )
}

export default TodoInput