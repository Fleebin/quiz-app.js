import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { useQuestions } from '../../context/Questions';
import { api } from '../../services/api'
import { useStyles } from './style.js'

export const Amount = () => {

    const { quest, setQuest } = useQuestions();
    const link = useNavigate();
    const classes = useStyles();

    return (
        <div className="">
            <p>Deseja continuar? </p>
            <Link to="/"><Button variant="text">Voltar</Button></Link>
            <Button
                className={classes.primary}
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
        </div >
    );
}
