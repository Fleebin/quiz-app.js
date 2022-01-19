import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../context/Questions';
import { getAnswers } from '../utils/answers';

export const Quest = () => {

    const navigation = useNavigate();
    const { quest, setQuest } = useQuestions();

    const [currentQuest, setcurrentQuest] = React.useState(0);
    const [indexAnswerChoose, setIndexAnswerChoose] = React.useState(null);
    const [answers, setAnswers] = React.useState([]);
    const [submittedAnswer, setSubmittedAnswer] = React.useState(false);

    useEffect(() => {
        if (!quest[0]) {
            return;
        }
        setAnswers(getAnswers(quest[currentQuest]));
    }, [currentQuest]);

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
                <div>
                    {answers.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    onClick={() => {
                                        if (submittedAnswer) {
                                            return;
                                        }
                                        setIndexAnswerChoose(index);
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
            </div>
        </>
    );
};