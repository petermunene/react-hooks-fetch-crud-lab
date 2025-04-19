import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onDelete}) {
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question ,index)=><QuestionItem key={index} onDelete={onDelete} question={question}/>)}</ul>
    </section>
  );
}

export default QuestionList;
