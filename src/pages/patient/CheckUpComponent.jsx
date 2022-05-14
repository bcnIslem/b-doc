
// hooks
import moment from 'moment'

// material ui components
import { Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const CheckUpComponent = ({ item }) => {
    
    const classes = useStyles()

    return (
        <>
        <Typography variant='h5' className={classes.graytext}>{moment(item.updatedAt).format('YYYY-MM-DD')}</Typography>
        <Grid className={classes.wrap}>
            <Typography variant='h6'>{item.tests.map((test) => ` •${test}`)}</Typography>
        </Grid>
        </>
    )
}

export default CheckUpComponent