import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-ui/core';
import { useFormik } from 'formik';


export const Home = () => {
    const navigation = useNavigate()
    const formik = useFormik({
        initialValues: {
            qtd: localStorage?.getItem('qtd')
        },
        onSubmit: values => {
            localStorage.setItem('qtd', values.qtdQuestions);
            navigation('/amount')
        },
    });
    return (
        <div className="home">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="qtd">Please, select how many quests you want to answer.</label>
                <Input
                    id="qtd"
                    name="qtd"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.qtd}
                />
                <Button type="submit" variant="contained">Next</Button>
            </form>
        </div>
    );
}