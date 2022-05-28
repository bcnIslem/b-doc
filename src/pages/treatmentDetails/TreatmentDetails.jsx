
// hooks
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// material ui components
import { Button, Container, Grid, Typography } from '@material-ui/core'

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

    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <Container>
        <Grid className={classes.top}>
            <Grid onClick={() => navigate(-1)} className={classes.back}>
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
                        <Typography className={classes.medName} variant='body1' ><MdOutlineMedication /> {medication.name}</Typography>

                        <Grid className={classes.rules}>
                            {medication.rules.map(m => (
                                <Grid key={m.rule}>
                                    {medication.name === m.ruleId 
                                    ? <Typography  className={classes.ruleName} variant='body2' >•{m.rule}</Typography>
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