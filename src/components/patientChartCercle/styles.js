import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    
    chart:{
        width: '60%',
        height: '60%',
    },

    [theme.breakpoints.down('sm')]: {
        chart: {
            height: '50%',
            margin: 'auto',
        },
    },
}))