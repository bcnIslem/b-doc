
// hooks
import moment from 'moment'

// material ui components
import { Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const TreatmentComponent = ({ item }) => {
    
    const classes = useStyles()

    return (
        <>
        <Typography variant='h5' className={classes.graytext}>{moment(item.updatedAt).format('YYYY-MM-DD')}</Typography>
        <Grid className={classes.wrap}>
            <Typography variant='h6'>{item.medications.map((med) => ` •${med.name}`)}</Typography>
        </Grid>
        </>
    )
}

export default TreatmentComponent