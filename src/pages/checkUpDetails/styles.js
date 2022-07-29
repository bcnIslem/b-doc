import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    top: {
        margin: '30px 0px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    back: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '2px 2px 6px gray',
        },
    },
    btn: {
        color: 'white',
        backgroundColor: '#33A6FF',
        boxShadow: '2px 2px 6px black',
        '&:hover': {
            color: "black",
            backgroundColor: '#3be993',
            boxShadow: '2px 2px 6px gray',
        },
    },
    main: {
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '15px',
        margin: 'auto'
    },
    patient: {
        margin: '30px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    lign: {
        margin: '30px'
    },
    medName: {
        fontWeight: '500'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
    },

    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {

    },
}))