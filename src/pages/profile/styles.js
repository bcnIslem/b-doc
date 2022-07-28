import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    main: {
        display: 'flex',
        flexDirection: 'column',
    },
    back: {
        textDecoration: 'none',
        margin:' 30px auto 30px 0px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        '&:hover': {
            color: 'red',
            boxShadow: '2px 2px 6px gray',
        },
    },
    container: {
        //maxHeight: '100vh',
        margin: 'auto'
    },
    name: {
        width: '50vw',
        padding: '2px 0px',
        marginBottom: '40px'
    },
    textfield:{
        margin: '5px 0px',
    },
    form: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: '30px auto',
    },
    btnSubmit: {
        marginBottom: '10px',
        backgroundColor: '#3be993',
        '&:hover': {
            color: "white",
            backgroundColor: '#3be993',
            boxShadow: '2px 2px 6px black',
        },
    },

    [theme.breakpoints.down('md')]: {
        name: {
            width: '90vw',
        },
        
    },
    [theme.breakpoints.down('xs')]: {

    },
}))