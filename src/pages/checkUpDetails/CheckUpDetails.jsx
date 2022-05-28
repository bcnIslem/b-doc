
// hooks
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// material ui components
import { Button, Container, Grid, Typography } from '@material-ui/core'

// icons
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

// print
import { useReactToPrint } from 'react-to-print'

// styles
import useStyles from './styles'

const CheckUpDetails = () => {
    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const checkUpToPrint = useSelector((state) => state.checkUps.checkUpToPrint)

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
                <Typography variant='h5' >{checkUpToPrint.patientFullName}</Typography>
            </Grid>

            <Grid className={classes.medications}>
                {checkUpToPrint.tests.map(test => (
                    <Grid className={classes.lign} key={test}>
                        <Typography className={classes.medName} variant='body1' >•{test}</Typography>
                    </Grid>
                )
                )}
            </Grid>
        </Grid>
        </Container>
    )
}

export default CheckUpDetails