import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../../context/Questions';
import { getAnswers } from '../../utils/answers';
import { Button, Container, Box } from '@material-ui/core';
import { useStyles } from './style';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOffOutlined';

export const Quest = () => {

    const navigation = useNavigate();
    const { quest, setQuest } = useQuestions();
    const classes = useStyles();

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

    useEffect(() => {
        if (!quest[0]) {
            return;
        }
        localStorage.setItem('qtdCorrectlyAnswers', 0);
        localStorage.setItem('qtdIncorrectlyAnswers', 0);
        setAnswers(getAnswers(quest[currentQuest]));
    }, []);


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
        <Container className={classes.body}>
            <div>
                {/* Perguntas! */}
                <div>
                    <p className={classes.h1}>
                        {`${currentQuest + 1}`} - {quest[currentQuest]?.question.replace(/&quot;/g, '"',)}
                    </p>
                    <p className={classes.h2}>
                        {quest[currentQuest]?.category}
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
                                    <p className={classes.answers}>
                                        {`${index + 1}) ${item}`}
                                    </p>
                                </div>
                                <div>
                                    {submittedAnswer &&
                                        quest[currentQuest].correct_answer ===
                                        item && (
                                            <Box color={'success.main'}>
                                                <CheckCircleOutlineOutlinedIcon
                                                    fontSize="medium"
                                                    color="success.main"
                                                />
                                            </Box>
                                        )}
                                    {submittedAnswer &&
                                        quest[currentQuest].correct_answer !==
                                        item && (
                                            <HighlightOffIcon fontSize="medium" color="error" />
                                        )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Button
                    className={classes.btnPrimary}
                    type="submit"
                    variant="contained"
                    onClick={() => {
                        checkAnswer();
                    }}
                >
                    Confirmar</Button>
            </div>
        </Container>
    );
};