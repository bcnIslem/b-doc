
// material ui components
import { Grid } from '@material-ui/core';

// chart component
import { PieChart } from 'react-minimal-pie-chart';

// styles
import useStyles from './styles'

const PatientChartCercle = ({patients, patientsWith, patientsWithout}) => {

    const classes = useStyles()

    return (
        <Grid className={classes.chart}>
            
            <PieChart
            lineWidth={25}
            paddingAngle={2}
            labelStyle={{
                fontSize: "5px",
                fill: "#000"
            }}
            label={({ dataEntry }) =>
                `${Math.round(dataEntry.percentage)}%`
            }
            data={[
                { title: 'patients', value: patients, color: '#33A6FF' },
                { title: 'patients with treatments', value: patientsWith, color: '#3be993' },
                { title: 'patients without treatments', value: patientsWithout, color: '#fc5a03' },
            ]}
            />
            
        </Grid>
    )
}

export default PatientChartCercle