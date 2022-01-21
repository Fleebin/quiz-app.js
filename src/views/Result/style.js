import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    h1: {
        fontSize: '28px',
        display: 'block',
        marginBottom: '33px',
        marginTop: '150px',

    },
    h2: {
        fontSize: '21px',
        display: 'block',
        marginBottom: '11px'
    },
    green: {
        color: 'green',
        fontWeight: 'bold'
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
});
