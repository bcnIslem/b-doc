import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper:{
        display: 'flex',
        width: '100%',
        margin: '20px 0px',
        padding: '2px 2px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnadd: {
        color: 'black',
        backgroundColor: '#44FF57',
        boxShadow: '2px 2px 6px gray',
        '&:hover': {
            color: "white",
            backgroundColor: '#44FF57',
            boxShadow: '2px 2px 6px black',
        },
    },
    search: {
        width: '100%',
    },
    actions: {
        MaxWidth: '200px',
        display: 'flex',
        justifyContent: 'center',
    },
    
    [theme.breakpoints.down('sm')]: {
        
        search: {
            width: '100%',
        },
    }
}))