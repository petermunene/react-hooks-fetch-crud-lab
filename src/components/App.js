import React, { useState ,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";



function App() {

  const [questions,setQuestions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then((data)=>{setQuestions(data)
 })
    
  },[])

  function onDelete(idToBeDeleted){
    fetch(`http://localhost:4000/questions/${idToBeDeleted}`,{
      method:"DELETE"
    })

    const updated= questions.filter((question)=>question.id!==idToBeDeleted 
      
    ) 
    setQuestions(updated)



  }

  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList onDelete={onDelete} questions={questions} />}
    </main>
  );
}

export default App;
