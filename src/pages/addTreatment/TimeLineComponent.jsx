
// material ui components
import { Paper, Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const TimeLineComponent = ({data}) => {

    const classes = useStyles()

    return (
        <Grid className={classes.timeLine}>
            <Typography variant='body1'>Medications Added</Typography>
            <Paper className={classes.treatmentName}>
                    {data.map((name) => (
                    <Paper className={classes.gridMEd} key={name}>
                        <Typography >{name}</Typography>
                    </Paper>
                    ))}
            </Paper>
        </Grid>
    )
}

export default TimeLineComponent