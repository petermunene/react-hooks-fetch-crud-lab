import React,{useState} from "react";

function QuestionItem({ question,onDelete }) {
  const { id, prompt, answers, correctIndex } = question;
  const [newCorrectIndex , setCorrectIndex]=useState(correctIndex)

  function handleOnChange(e){
    const newIndex=e.target.value
    setCorrectIndex(newIndex)
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers:{
      "Content-Type": "application/json",
    },
      body:JSON.stringify({
        correctIndex: newIndex,
      })
    })
    

  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index} >
      {answer}
    </option>
  ));
  function handleOnClick(){
    onDelete(id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}  onChange={handleOnChange}>{options}</select>
      </label>
    <button onClick={handleOnClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
