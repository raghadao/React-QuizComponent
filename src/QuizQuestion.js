import React, {Component } from 'react'

class QuizQuestion extends Component{
render(){
return(

    <mian>
      <section>
<p>{this.props.quiz_question.instruction_text}</p>
      </section>
      <section className="buttons">

       <ul>
<li>{this.props.quiz_question.answer_options[0]}</li>
          
       </ul>

      </section>
      


    </mian>
)


}


}

export default QuizQuestion