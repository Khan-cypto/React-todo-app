import React, {useState} from 'react';
import './index.css';
import TodoList from './TodoList.jsx'


const App = () => {

const[inputList, setInputList] = useState("");
const[items, setItems] = useState([]);

  const itemEvent = (inputValue) => {
    setInputList(inputValue.target.value);
    // console.log(inputValue.target.value)
  };


  const itemsList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList ];
    });
    setInputList("");
  };


const deleteItem = (id) => {
    console.log("Deleted index #",id);

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {           //callback function in filter
        return index !== id;
      })
    } )
  };



  return (
    <>
    <div className="main-div">
      <div className="center-div">
      <br/>
      <h1>Todo List</h1>
      <br/>
      <input type="text" placeholder="Enter a task" value={inputList} onChange={itemEvent} />
      <button onClick={itemsList}> + </button>
      <ol>
        {/*<li>{inputList}</li>*/}

        {items.map((itemVal, index) => {
                  return (
                    <TodoList 
                      key={index}
                      id={index}
                      text={itemVal} 
                      onSelect={deleteItem}
                  />
                  );
                })}
      </ol>
      </div>
    </div>
    </>
    );

}



export default App;