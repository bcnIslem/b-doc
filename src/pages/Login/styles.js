import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    container:{
        display: 'flex',
        height: '100vh',
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: 'auto',
    },
    paper:{
        margin:'auto',
        borderRadius: '15px',
    },
    form:{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center !important',
        textAlign: 'center !important',
    },
    title:{
        margin: '30px !important',
    },
    textfield:{
        margin: '10px !important',
    },
    buttonSubmit:{
        margin: '30px !important',
        color: 'white',
        backgroundColor: '#33A6FF !important',
        boxShadow: '2px 2px 6px gray',
        '&:hover': {
            color: "black",
            backgroundColor: '#33A6FF',
            boxShadow: '2px 2px 6px black',
        },
    },
    [theme.breakpoints.down('sm')]: {
        form: {
            minHeight: '40vh',
        }
    }
}))