import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    form: {
        texAlign: 'left',
        marginTop: '150px',
        fontFamily: '-apple-system'
    },
    label: {
        fontSize: '33px',
        display: 'block'
    },
    input: {
        borderBottom: '1px solid',
        width: '50%',
        display: 'block',
        fontSize: '30px',
        animation: '1ms ease 0s 1 normal none running native- autofill -in',
        color: 'rgb(4, 69, 175)'
    },
    btnPrimary: {
        backgroundColor: 'rgb(4, 69, 175)',
        color: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 12px 0px',
        borderRadius: '4px',
        border: '1px solid transparent',
        padding: '6px 14px',
        marginTop: '21px'
    }
});
