import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper:{
        marginTop: '30px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid:{
        display: 'flex',
        flexDirection: 'column',
    },
    griditem:{
        display: 'flex',
        alignItems: 'center',
        minHeight: '50px',
        borderBottom: '1px solid gray',
    },
    title: {
        width: '200px',
    },
    typo: {
        marginLeft: '30px',
        width: '80%'
    },
    btnPaper: {
        height: '8vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        margin: '0px 20px',
        color: 'white',
        backgroundColor: '#33A6FF',
        boxShadow: '2px 2px 6px gray',
        width: '200px',
        padding: '8px 20px',
        '&:hover': {
            color: "black",
            backgroundColor: '#3be993',
            boxShadow: '2px 2px 6px black',
        }
    },
    content:{
        margin: '20px 0px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    table: {
        margin: '30px 20px',
        width: '40%',
        textAlign: 'center',
    },
    chechup: {
        marginTop: '10px',
        padding: '10px',
    },
    treatment: {
        marginTop: '10px',
        padding: '10px',
        cursor: 'pointer'
    },
    wrap: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    graytext: {
        color: 'gray'
    },

    
    [theme.breakpoints.down('md')]: {
        
        typo: {
            marginLeft: '0px',
            width: '100%'
        },
        btnPaper: {
            flexDirection: 'column',
            height: 'auto'
        },
        btn: {
            margin: '10px 0px',
            width: '90%',
        },
        table: {
            margin: '30px 0px',
            width: '45%',
        },
    },
}));