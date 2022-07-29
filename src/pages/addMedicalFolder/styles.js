import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        padding: '5px',
        width: '100%',
        borderRadius: '15px',
    },
    title:{
        margin: '5px 0px 20px 0px !important',
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
        width: '100%',
        '&:hover': {
            color: "white",
            backgroundColor: '#3be993',
            boxShadow: '2px 2px 6px black',
        },
    },
    input: {
        padding: '10px',
        marginTop: '30px'
    },
    folder: {
        display: 'flex',
        flexDirection: 'column',
    },
    folderBtn: {
        marginTop: '12px'
    },
    actions: {
        display: 'flex',
        marginTop: '30px'
    },

    timeLine: {
        margin: '10px 0px',
    },
    treatmentName: {
        display: 'flex',
        margin: '10px 0px',
        padding: '6px 20px',
        flexWrap: 'wrap',
    },
    gridMEd: {
        display: 'flex',
        padding: '4px 14px',
        backgroundColor: 'lightblue',
        margin: '10px 10px 10px 0px',
    },

    [theme.breakpoints.down('md')]: {
        actions: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        next: {
            width: '100%'
        },
        btnSubmit: {
            width: '100%'
        },
    },
    [theme.breakpoints.down('xs')]: {

    },
}))