
// material ui components
import { Grid, Typography } from '@material-ui/core'

// chart components
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

// styles
import useStyles from './styles'

const PatientChart = ({ data }) => {
    
    const classes = useStyles()

    return (
        <Grid className={classes.chart} title='Patients'>
            <Typography variant='h6' className={classes.title}>Patients</Typography>
            {window.innerWidth > 770 ? (
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip/>
                        <Line type="monotone" dataKey='Patients' stroke="#33A6FF" dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <ResponsiveContainer  width="100%" aspect={4 / 2.8}>
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                    <Line type="monotone" dataKey='Patients' stroke="#33A6FF"  dot={false} strokeWidth={1} />
                </LineChart>
            </ResponsiveContainer>
            )
            }
            
        </Grid>
    )
}

export default PatientChart