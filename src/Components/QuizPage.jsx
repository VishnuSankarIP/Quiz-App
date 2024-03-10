import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SvgComponent from './SvgComponent';
import { getAllQuestionAPI } from '../Services/allAPI';
import '../style.css';
function QuizPage() {
    const [allQuestion, setAllQuestion] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [showScoreCard, setShowScoreCard] = useState(false);

    const getAllQuestion = async () => {
        const result = await getAllQuestionAPI();
        console.log(result);
        if (result?.status === 200) {
            setAllQuestion(result?.data);
        }
    };

    useEffect(() => {
        getAllQuestion();
    }, []);

    const handleAnswer = (isCorrect) => {
        const updatedCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;
        const updatedWrongAnswers = isCorrect ? wrongAnswers : wrongAnswers + 1;
        const updatedScore = isCorrect ? score + 5 : score;

        if (currentCardIndex < allQuestion.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            setShowScoreCard(true);
        }

        setScore(updatedScore);
        setCorrectAnswers(updatedCorrectAnswers);
        setWrongAnswers(updatedWrongAnswers);
        console.log(updatedScore);
    };
  

    return (
        <div className="d-flex justify-content-center align-items-center">
            {!showScoreCard ? (
                <Row>
                    <Col className='mb-4' sm={16} md={6} lg={4}>
                        <Card className='mt-5' style={{ width: '36rem', height: '400px', borderColor: '#0099FF', borderRadius: '20px' }}>
                            <Card.Body>
                                <Card.Title>{allQuestion[currentCardIndex]?.id}/10</Card.Title>
                                <Card.Title>{allQuestion[currentCardIndex]?.ques}</Card.Title>
                                {allQuestion[currentCardIndex]?.answerOptions.map((option, index) => (
                                    <Card.Text key={index}>
                                        <button className='mt-3 p-1 optionButton' style={{ width: '100%', borderRadius: '20px',borderColor:"#0099FF" }} onClick={() => handleAnswer(option.isCorrect)}>{option.answer}</button>
                                    </Card.Text>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <Card className='mt-5' style={{ width: '36rem', height: '400px', borderColor: '#0099FF', borderRadius: '20px' }}>
    <Card.Body>
        <Card.Title style={{fontSize:'40px'}}>{!showScoreCard ? `${allQuestion[currentCardIndex]?.id}/10` : "Quiz Completed!"}</Card.Title>
        {!showScoreCard && <Card.Title>{allQuestion[currentCardIndex]?.ques}</Card.Title>}
        {!showScoreCard && allQuestion[currentCardIndex]?.answerOptions.map((option, index) => (
            <Card.Text key={index}>
                <button className='mt-3 p-1 optionButton' style={{ width: '100%', borderRadius: '20px' }} onClick={() => handleAnswer(option.isCorrect)}>{option.answer}</button>
            </Card.Text>
        ))}
        {showScoreCard && (
            <>
            <div className="text-center"> <Card.Text style={{fontSize:'70px',color:"#0099FF"}}>Score: {score}</Card.Text>
            <Card.Text>Correct Answers: {correctAnswers}</Card.Text>
            <Card.Text>Wrong Answers: {wrongAnswers}</Card.Text></div>
               
            </>
        )}
        <button className='mt-3 p-1 optionButton' style={{ width: '100%', borderRadius: '20px',borderColor:"#0099FF" }} onClick={() => window.location.reload()}>Reset Quiz</button>
    </Card.Body>
</Card>

            )}
            <SvgComponent />
        </div>
    );
}

export default QuizPage;
