import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
        display: 'flex',
        height: '100vh',
    },
    container: {
        maxHeight: '100vh !important',
        display: 'flex',
        alignItems: 'center',
        '@media (orientation: landscape)': {
            margin: '90px auto',
        },
    },
    div:{
        width: '50%',
        margin: '20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    [theme.breakpoints.down('md')]: {
        div: {
            width: '95%',
        },
        main: {
            flexDirection: 'column'
        },
    }
}))