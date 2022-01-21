import React from 'react';
import { Container, Button } from '@material-ui/core';
import { useStyles } from './style';
import { useNavigate } from 'react-router-dom'


export const Result = () => {

    const classes = useStyles();
    const link = useNavigate();

    function percentHits() {
        const corretctly = localStorage.getItem('qtdCorrectlyAnswers');
        const quests = localStorage.getItem('qtdQuests');
        const percent = (Number(corretctly) * 100) / quests;

        return String(percent).substring(0, 4);
    }
    return (
        <>
            <Container>
                <div>
                    <p className={classes.h1}>
                        Você <span className={classes.green}>
                            acertou
                            {` ${localStorage.getItem('qtdCorrectlyAnswers')} `}
                        </span>
                        de
                        {` ${localStorage.getItem('qtdQuests')} `}
                        questões
                    </p>
                </div>
                <p className={classes.h2}>
                    {percentHits()}%
                </p>
                <Button
                    className={classes.btnPrimary}
                    variant="contained"
                    onClick={() => {
                        link('/');
                    }}
                >
                    Voltar</Button>
            </Container>
        </>

    );
}
