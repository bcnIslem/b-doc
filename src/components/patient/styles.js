import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper:{
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        lineBreak: 'none',
        height: '40px',
        borderBottom: '1px solid gray',
        borderRadius: '0px',
        '&:hover': {
            backgroundColor: '#ebefff',
        },
    },
    open:{
        flex: 7,
        display: 'flex',
        width: '100%',
        cursor: 'pointer',
        zIndex: 9,
    },
    grid:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '10px',
        lineBreak: 'auto',
        overflow: 'hidden',
    },
    griddesc:{
        flex: 2,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '8px',
        
    },
    actions:{
        flex: 1,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '20px',
        textAlign: 'center',
        padding: '10px',
    },
    tp: {
        overflow: 'hidden',
    },
    
    [theme.breakpoints.down('md')]: {
        hide: {
            display: 'none',
        },
        actions: {
            flex: 4,
        }
    },
    [theme.breakpoints.down('xs')]: {

    },
}))