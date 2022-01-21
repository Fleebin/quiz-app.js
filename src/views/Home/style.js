import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    form: {
        texAlign: 'left',
        marginTop: '150px',
    },
    label: {
        fontSize: '33px',
        display: 'block',
        marginBottom: '33px',
        color: '#5E6B8C',
        fontWeight: '600'
    },
    input: {
        borderBottom: '1px solid',
        width: '50%',
        display: 'block',
        fontSize: '30px',
        animation: '1ms ease 0s 1 normal none running native- autofill -in',
        color: 'rgb(4, 69, 175)',
    },

    btnPrimary: {
        textTransform: 'none',
        backgroundColor: 'rgba(0, 118, 255, 0.9)',
        color: 'rgb(255, 255, 255)',
        boxShadow: '0 6px 20px rgba(0, 118, 255, 0.23)',
        borderRadius: '4px',
        border: '1px solid transparent',
        padding: '6px 14px',
        marginTop: '21px'
    }
});
