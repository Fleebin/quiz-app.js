import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Input, Container } from '@material-ui/core';
import { useFormik } from 'formik';
import { useStyles } from './style.js'


export const Home = () => {

    const link = useNavigate()
    const formik = useFormik({
        initialValues: {
            qtd: localStorage?.getItem('qtdQuests')
        },
        onSubmit: values => {
            localStorage.setItem('qtdQuests', values.qtd);
            link('/amount')
        },
    });
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <label className={classes.label} htmlFor="qtd">Quantas perguntas você quer responder?</label>
                <Input
                    className={classes.input}
                    id="qtd"
                    name="qtd"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.qtd}
                />
                <Button className={classes.btnPrimary} type="submit" variant="contained">Proximo</Button>
            </form>
        </Container>
    );
}