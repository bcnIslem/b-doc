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
        flex: 8,
        display: 'flex',
        width: '100%',
        cursor: 'pointer',
        zIndex: 9,
    },
    grid:{
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '20px',
        textAlign: 'center',
        padding: '10px',
        lineBreak: 'auto',
    },
    griddesc:{
        flex: 4,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '20px',
        textAlign: 'center',
        padding: '10px',
        
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

}))