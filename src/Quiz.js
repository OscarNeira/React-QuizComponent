import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = { quiz_position: 1 }
        //this.isQuizEnd = false
    }
    showNextQuestion(){
        console.log("showNextQuestion Quiz.js")
        this.setState((state) => {
            return {quiz_position: state.quiz_position + 1}
        })
    }
    render() {
        const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length)
        //const isQuizEnd1 = true;
        console.log("quizData.quiz_questions.length "+quizData.quiz_questions.length)
        console.log("state.quiz_position "+this.state.quiz_position)
        console.log("isQuizEnd "+ isQuizEnd)
        //let button
        //if (isQuizEnd) {
        //    button = <QuizEnd />;
        //  }
        
        return(
            // <div><div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div></div>
           // {button}
            <div>
            {isQuizEnd ? <QuizEnd/> :     
            <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion.bind(this)}/> }
            </div>           
            )
        }
    }

export default Quiz