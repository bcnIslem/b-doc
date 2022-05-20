
// material ui components
import { useTranslation } from 'react-i18next'
import { Paper, Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const TimeLineComponent = ({data}) => {

    const classes = useStyles()
    const { t } = useTranslation()

    return (
        <Grid className={classes.timeLine}>
            <Typography variant='body1'>{t('Treatments.4')}</Typography>
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