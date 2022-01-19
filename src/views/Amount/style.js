import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    body: {
        texAlign: 'center',
        marginTop: '150px',

    },
    flex: {
        display: 'flex',
    },
    h1: {
        fontSize: '33px',
        display: 'block',
        marginBottom: '33px'
    },
    h2: {
        fontSize: '21px',
        display: 'block',
        marginBottom: '33px'
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
