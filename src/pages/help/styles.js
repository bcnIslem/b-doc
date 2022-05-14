import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        marginTop: '60px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    socialmedia: {
        margin: '60px auto',
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    back: {
        width: '40px',
        textDecoration: 'none',
        margin:' 30px auto 30px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        '&:hover': {
            color: 'red',
        },
    },

    [theme.breakpoints.down('md')]: {

    },
    [theme.breakpoints.down('xs')]: {

    },
}))