import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../context/Questions';
import { getAnswers } from '../utils/answers';
import { Button } from '@material-ui/core';
export const Quest = () => {

    const navigation = useNavigate();
    const { quest, setQuest } = useQuestions();

    const [currentQuest, setcurrentQuest] = React.useState(0);
    const [answerChoose, setAnswerChoose] = React.useState(null);
    const [answers, setAnswers] = React.useState([]);
    const [submittedAnswer, setSubmittedAnswer] = React.useState(false);
    const [labelButton, setLabelButton] = React.useState('Confirmar');
    const [newQuestAva, setNewQuestAva] = React.useState(false);

    useEffect(() => {
        if (!quest[0]) {
            return;
        }
        setAnswers(getAnswers(quest[currentQuest]));
    }, [currentQuest]);

    const checkAnswer = () => {

        if (newQuestAva) {
            if (!quest[currentQuest + 1]) {
                navigation('/result');
            }
            setSubmittedAnswer(false);
            setAnswers([]);
            setAnswerChoose(null);
            setLabelButton('Confirm');
            setNewQuestAva(false);
            setcurrentQuest((oldState) => oldState + 1);
            return;
        }

        setSubmittedAnswer(true);
        setNewQuestAva(true);

        const optionSelected = answers[answerChoose];

        if (
            quest[currentQuest].correct_answer === optionSelected
        ) {
            localStorage.setItem(
                'qtdCorrectlyAnswers',
                Number(localStorage?.getItem('qtdCorrectlyAnswers')) + 1,
            );
        } else {
            localStorage.setItem(
                'qtdIncorrectlyAnswers',
                Number(localStorage?.getItem('qtdCorrectlyAnswers')) + 1,
            );
        }

        setLabelButton('Next');
    };

    return (
        <>
            <div>
                <p>
                    {`${currentQuest + 1}/${localStorage.getItem(
                        'qtdQuests',
                    )}`}
                </p>
            </div>
            <div>
                {/* Perguntas! */}
                <div>
                    <p>
                        {quest[currentQuest]?.category}
                    </p>
                    <p>
                        {quest[currentQuest]?.question.replace(
                            /&quot;/g,
                            '"',
                        )}
                    </p>
                </div>
                {/* Respostas! */}
                <div>
                    {answers.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    onClick={() => {
                                        if (submittedAnswer) {
                                            return;
                                        }
                                        setAnswerChoose(index);
                                    }}
                                >
                                    <p>
                                        {`${index + 1}) ${item}`}
                                    </p>
                                </div>
                                <div>
                                    {submittedAnswer &&
                                        quest[currentQuest].correct_answer ===
                                        item && (
                                            <div>
                                            </div>
                                        )}
                                    {submittedAnswer &&
                                        quest[currentQuest].correct_answer !==
                                        item && (
                                            <p />
                                        )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={() => { checkAnswer(); }}
                >
                    Confirmar</Button>
            </div>
        </>
    );
};