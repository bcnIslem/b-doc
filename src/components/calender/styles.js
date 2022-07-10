import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    calender: {
        display: 'flex',
        justifyContent: 'center',
    },
    component: {
        width: '100%',
        height: '350px',
    },

    [theme.breakpoints.down('lg')]: {

    },
    [theme.breakpoints.down('sm')]: {
    },
}))