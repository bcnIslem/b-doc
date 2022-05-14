import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        padding: '5px',
        width: '100%',
    },
    title:{
        margin: '5px 0px !important',
        textAlign: 'center',
    },
    textfield:{
        margin: '5px 0px !important',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: '30px auto',
        justifyContent: 'center',
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
    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {

    },
}))