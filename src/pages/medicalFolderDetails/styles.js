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
        //width: '75%',
        margin: 'auto'
    },
    patient: {
        margin: '100px auto 40px 60px'
    },
    lign: {
        width: '80%',
        margin: '30px 0px 0px auto'
    },
    medName: {
        fontWeight: '500'
    },
    media: {
        width: '100%',
        height: '100vh',
        backgroundSize: 'contain'
    },


    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {

    },
}))