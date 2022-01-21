import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    body: {
        textAlign: 'left',
        marginTop: '150px',
    },
    h1: {
        fontSize: '28px',
        display: 'block',
        marginBottom: '33px'
    },
    flexDisplay: {
        display: 'flex',
        alignItems: 'center',
    },
    h2: {
        fontSize: '21px',
        display: 'block',
        marginBottom: '33px'
    },
    answers: {
        fontSize: '18px',
        color: '#5E6B8C',
        boxShadow: '0px 0px 36.2295px rgba(54, 57, 83, 0.2)',
        padding: '15px',
        borderRadius: '7px',
        marginRight: '5px',
        '&:hover': {
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer'
        },
        '&:focus': {
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer'
        },
    },
    btnPrimary: {
        textTransform: 'none',
        backgroundColor: 'rgba(0, 118, 255, 0.9)',
        color: 'rgb(255, 255, 255)',
        boxShadow: '0 6px 20px rgba(0, 118, 255, 0.23)',
        borderRadius: '4px',
        border: '1px solid transparent',
        padding: '6px 14px',
        marginTop: '21px',
        width: '200px'
    },
    btnSecondary: {
        textTransform: 'none',
        marginTop: '21px',
        marginRight: '15px',
        padding: '6px 14px',
        borderRadius: '7px',
        background: ' #fff',
        color: '#696969',
        boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        width: '200px'
    }
});
