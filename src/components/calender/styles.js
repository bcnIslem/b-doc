import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    calender: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '15px',
        overflow: 'hidden',

    },
    component: {
        width: '100%',
        height: '350px',
        borderRadius: '15px',
    },

    [theme.breakpoints.down('lg')]: {

    },
    [theme.breakpoints.down('sm')]: {
    },
}))