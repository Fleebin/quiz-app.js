import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container } from '@material-ui/core';
import { useQuestions } from '../../context/Questions';
import { api } from '../../services/api'
import { useStyles } from './style.js'

export const Amount = () => {

    const { quest, setQuest } = useQuestions();
    const link = useNavigate();
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.body}>
            <p className={classes.h1}>Você selecionou {localStorage.getItem('qtdQuests')} perguntas</p>
            <p className={classes.h2}>Deseja continuar? </p>
            <div className={classes.flex}>
                <Link to="/"><Button className={classes.btnSecondary} variant="text">Voltar</Button></Link>
                <Button
                    className={classes.btnPrimary}
                    type="submit"
                    variant="contained"
                    onClick={() => {
                        api
                            .get(`?amount=${localStorage.getItem('qtdQuests')}`)
                            .then((response) => {
                                setQuest(response.data.results);
                                return link('/quest');
                            })
                    }}
                >
                    Começar</Button>
            </div>
        </Container >
    );
}
