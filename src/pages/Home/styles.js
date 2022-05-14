import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
        display: 'flex',
    },
    container: {
        maxHeight: '100vh !important',
        paddingBottom: '20px'
    },
    paper:{
        display: 'flex',
        padding: '0px',
        margin: '20px 4px 20px 0px',
    },
    open:{
        flex: 7,
        display: 'flex',
        width: '100%',
    },
    grid:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '10px',
        textAlign: 'center',
        padding: '10px',
    },
    griddesc:{
        flex: 2,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '10px',
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
    typo: {
        fontSize: '24px',
    },
    table:{
        maxHeight: '60vh',
        overflowY: 'scroll',
    },

    [theme.breakpoints.down('sm')]: {
        hide: {
            display: 'none',
        },
        actions: {
            flex: 4,
        },
    },
    [theme.breakpoints.down('md')]: {
        hide: {
            display: 'none',
        },
        actions: {
            flex: 6,
        },
        main: {
            flexDirection: 'column'
        },
    },
}))