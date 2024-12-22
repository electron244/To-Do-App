import { MdDelete } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { useState, useRef } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const ref = useRef();
  const i = useRef();
  const j = useRef();
  const k = useRef();

  function handelAdd() {
    let data = ref.current.value;
    setTasklist([...tasklist, data]);
    setTask((ref.current.value = ""));
  }
  function handelDelete(index) {
    setTasklist((prevTasklist) => prevTasklist.filter((_, i) => i !== index));
    
  }
  function handelDone() {
    k.current.style.textDecoration = "line-through";
  }

  return (
    <>
      <div className="w-full h-screen bg-[#E1FFBB] flex items-center">
        <div className="mx-auto bg-[#009990] rounded-xl w-1/2 ">
          <div className="w-full h-auto flex justify-center">
            <h1 className="font-bold text-5xl mx-auto text-white underline my-3">
              To Do List
            </h1>
          </div>
          <div className="flex w-full justify-center gap-5 my-5">
            <input type="text" className="w-3/4 rounded-md px-3" ref={ref} name="input" placeholder="Add Some Task !"/>
            <button
              className="bg-[#074799] text-white font-bold w-32 rounded-md h-10 text-xl"
              onClick={handelAdd}
            >
              Add
            </button>
          </div>


          {tasklist.map((ele, index) => {
            return (
              <div
                className="w-full flex justify-center gap-5 my-3"
                key={index}
                value={index}
                ref={i}
              >
                <div className="w-3/5">
                  <p className="h-10 bg-white rounded-md flex items-center px-3 font-semibold text-xl overflow-x-auto" ref={k}>
                    {`${index + 1}. ${ele}`}
                  </p>
                </div>
                <div className="flex w-1/4 gap-3">
                  <button
                    className="text-4xl bg-[#074799] w-14 rounded-md flex justify-center items-center text-white h-10"
                    onClick={() => handelDelete(index)}
                  >
                    <MdDelete />
                  </button>
                  <button
                    className="text-4xl bg-[#074799] w-14 rounded-md flex justify-center items-center text-white"
                    ref={j}
                    onClick={() => handelDone(index)}
                  >
                    <MdFileDownloadDone />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
