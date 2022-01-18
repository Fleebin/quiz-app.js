import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-ui/core';
import { useFormik } from 'formik';


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
    return (
        <div className="home">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="qtd">Selecione quantas perguntas você deseja responder</label>
                <Input
                    id="qtd"
                    name="qtd"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.qtd}
                />
                <Button type="submit" variant="contained">Proximo</Button>
            </form>
        </div>
    );
}