import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper:{
        display: 'flex',
        width: '100%',
        margin: '20px 0px',
        padding: '10px 20px',
        backgroundColor: '#3be993',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actions: {
        MaxWidth: '200px',
        display: 'flex',
        justifyContent: 'center',
    },
    btnadd: {
        color: 'white',
        backgroundColor: '#33A6FF',
        '&:hover': {
            color: "black",
            backgroundColor: '#f7f8fc',
            boxShadow: '2px 2px 6px gray',
        },
    },
    arrow: {
        '&:hover': {
            color: '#f7f8fc',
        },
    },
    [theme.breakpoints.down('sm')]: {
        title: {
            display: 'none',
        },
    }
}));