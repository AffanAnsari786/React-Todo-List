import React, { useState, useRef, useEffect } from 'react'



function TodoEasy() {  
  const [activity, setActivity] = useState('')
  const [listActivity, setListActivity] = useState([])
  const Ref = useRef(null);

  useEffect(() => {
    Ref.current.focus();
}, [])

    const handleEnterPress = (e) =>{
      if (e.keyCode===13){
        addActivity()
      }
    }

    function addActivity(){
      if(activity==''){
        alert("Please Enter Something")
      }
      else{
        setListActivity((listActivity)=>{
          const updatedList = [...listActivity, activity]
          setActivity('')
          return updatedList
        }       
      )
      }
        
    }

    function removeListData(id){
      const updatedDataList = [...listActivity] 
      updatedDataList.splice(id,1)
      setListActivity([...updatedDataList])
    }

    function removeAllData(){
      setListActivity([])
    }

  return (


    <div className='Container'>
        <div className='Header'>TODO LIST</div>
        <div>
          <input ref={Ref} className='input' type='text' placeholder='Enter Your Activity' value={activity} onChange={(e)=>{setActivity(e.target.value)}}></input>
          <button className='btn' onClick={addActivity} onKeyDown={handleEnterPress}>Add</button>
        </div>
        {listActivity.length?<div><hr id='horiLine'></hr>
        <div className='para'>HERE IS YOUR LIST</div>
        <hr id='horiLine'></hr></div>: null }
        
                 
            {
              listActivity!=[] && listActivity.map((elem, id)=>{
                return (
                  <div style={{height: '50px'}}>
                    <div key={id}>
                      <div className='list-data'>{elem}</div>
                      <button className='btn-list btn' onClick={()=>removeListData(id)}>Remove</button>
                    </div>
                  </div>
                )

                })
            }
          {listActivity.length?<button className='btn' style={{margin: '40px'}} onClick={removeAllData}>Remove All</button>: "" }
      </div>

    // <>
    // <div className='container'>
    //     <div className='header'>TODO LIST</div>
    //     <div>
    //         <input className='inputText' type='text' placeholder='Add Your Activity' value={activity} onChange={(e)=>{setActivity(e.target.value)}}></input>
    //         <button className='btn' onClick={addActivity}>Add</button>
    //     </div>
    //     <div className='list-data'>
    //         {listActivity!=[] && listActivity.map((data, i)=>{
    //             return(
    //                 <>
    //                     <p key={i}>
    //                         <div>{data}</div>
    //                     </p>
    //                 </>
    //             )
    //         })}
    //     </div>
        
        
    // </div>
    // </>
  )
}

export default TodoEasy