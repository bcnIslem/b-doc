
// hooks
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// material ui components
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core'

// icons
import { MdOutlineMedication } from 'react-icons/md'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

// print
import { useReactToPrint } from 'react-to-print'

// styles
import useStyles from './styles'

const TreatmentDetails = () => {
    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const treatmentToPrint = useSelector((state) => state.treatments.treatmentToPrint)

    console.log('ttt', treatmentToPrint)
    treatmentToPrint.medications.map(med => {
        console.log('m: ', med.rules)
    })
    const classes = useStyles()

    return (
        <Container>
        <Grid className={classes.top}>
            <Grid component={Link} to='/dashboard' className={classes.back}>
                    <BsFillArrowLeftSquareFill size='35' color='#3be993' />
            </Grid>
            <Button onClick={handlePrint} className={classes.btn}>Print</Button>
        </Grid>
        <Grid className={classes.main} ref={componentRef}>
            <Grid className={classes.patient}>
                <Typography variant='h5' >{treatmentToPrint.patientName}</Typography>
            </Grid>
            <Grid className={classes.medications}>
                {treatmentToPrint.medications.map(medication => (

                    <Grid className={classes.lign} key={medication.name}>
                        <Typography className={classes.medName} variant='h5' ><MdOutlineMedication /> {medication.name}</Typography>

                        <Grid className={classes.rules}>
                            {medication.rules.map(m => (
                                <Grid key={m.rule}>
                                    {medication.name === m.ruleId 
                                    ? <Typography variant='h6' >•{m.rule}</Typography>
                                    : ''
                                    }
                                </Grid>
                            )
                            )}
                        </Grid>

                    </Grid>
                )
                )}
            </Grid>
        </Grid>
        </Container>
    )
}

export default TreatmentDetails