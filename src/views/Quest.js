import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { useFormik } from 'formik';


export const Quest = () => {
    return (
        <div className="">
            <Link to="/"><Button variant="text">Cancel</Button></Link>
            <Link to="/quest"><Button type="submit" variant="contained">Start</Button></Link>
        </div >
    );
}
