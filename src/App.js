import "./App.css";
import { useState } from "react";
function App() {
  let [inputText, setVal] = useState("");
  let [todos, setDotos] = useState([
    {
      id: 1,
      text: "my todo",
      isComplete: false,
    },
  ]);

  const handlets = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setDotos([...todos, newTodo]);

    setVal("");
  };

  const removeItem = (item) => {
    setDotos(todos.filter((element) => element.id !== item.id));
  };
  const editItem = (id) => {
    const promText = prompt("O'zgartiring");
    const EditId = todos.find((item) => {
      return item.id == id;
    });
    EditId.text = promText;
    setDotos([...todos]);
  };

  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-5'>TodoList</h1>

        <form onSubmit={handlets} className='form d-flex'>
          <input
            value={inputText}
            checked={todos.isComplete}
            className='form-control'
            type='text'
            onChange={(evt) => setVal(evt.target.value)}
          />
          <button className='btn ms-3 btn-info text-white'> gazz</button>
        </form>

        <ul className='list-unstyled mt-5'>
          {todos.map((item) => (
            <li
              key={todos.id}
              className='items d-flex justify-content-between align-item-center mt-4'
            >
              <div className='text-center d-flex   mt-1 '>
                <input className='me-3 cheek' type='checkbox' />
                <p className='m-0'>{item.text}</p>
              </div>

              <div>
                <button
                  className='btn me-2  text-white btn-danger delet'
                  onClick={() => removeItem(item)}
                >
                  delete
                </button>
                <button
                  onClick={() => editItem(item.id)}
                  className='btn text-white btn-info edit '
                >
                  edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
