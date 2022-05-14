import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
        display: 'flex',
    },
    container: {
        maxHeight: '100vh !important',
    },
    paper:{
        display: 'flex',
        padding: '0px',
        margin: '20px 4px 20px 0px',
    },
    open:{
        flex: 8,
        display: 'flex',
    },
    grid:{
        flex: 2,
        textAlign: 'center',
        padding: '10px',
    },
    gridtests:{
        flex: 4,
        textAlign: 'center',
        padding: '10px',
    },
    actions:{
        flex: 1,
        textAlign: 'center',
        padding: '10px',
    },
    table:{
        marginTop: '10px',
        maxHeight: '60vh',
        overflowY: 'scroll',

    },

    [theme.breakpoints.down('md')]: {
        main: {
            flexDirection: 'column'
        },
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