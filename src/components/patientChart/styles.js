import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    
    title: {
        margin: '0px 0px 10px 30px',
    },
    chart:{
        width: '100%',
        height: '80%',
    },

    [theme.breakpoints.down('sm')]: {
        chart: {
            height: '50%',
            margin: 'auto',
        },
    },
}))