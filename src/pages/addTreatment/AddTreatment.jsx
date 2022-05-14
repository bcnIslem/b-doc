
// hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// components
import Header from '../../components/header/Header'
import TimeLineComponent from './TimeLineComponent'

// actions
import { addTreatment } from '../../actions/treatment'

// material ui components
import { Container, Paper, Grid, Typography, TextField, Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

// icons
import { MdOutlineRemove, MdAdd } from 'react-icons/md'

// styles
import useStyles from './styles'

const AddTreatment = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()

    // medications rules
    const [rulesData, setRulesData] = useState([
        {
            ruleId: '',
            rule: ''
        }
    ])

    // medications
    const [medicationsData, setMedicationsData] = useState([
        {
            medicationId: '',
            name: '',
        }
    ])

    const [treatmentData, setTreatmentData] = useState({
        patientId: '',
        patientName: '',
        // med name and rules
        medications: []
    })

    // time line medications
    const [timeLineMed, setTimeLineMed] = useState([]) 

    // fetch the patient to be treated
    const patientToAddTreatment = useSelector((state) => state.patients.patientToAddTreatment)

    // add rule
    const handleAddRule = () => {
        setRulesData( [ ...rulesData, { ruleId: '', rule: '' } ] )
    }

    // remove rule
    const handleRemoveRule = (index) => {
        const rules = [ ...rulesData ]
        rules.splice(index, 1)

        setRulesData(rules)
    }

    // medications change input
    const handleMedicationsInput = (index, e) => {
        const medications = [ ...medicationsData ]

        medications[index][e.target.name] = e.target.value

        // seting the medication id
        for ( var i = 0; i < medications.length; i++) {
            medications[i].medicationId = medications[i].name
        }

        setMedicationsData(medications)
    }

    // rules change input
    const handleRulesInput = (medication, index, e) => {
        const rules = [ ...rulesData ]

        // setting the rule id
        rules[index].ruleId = medication

        rules[index][e.target.name] = e.target.value

        setRulesData(rules)
    }

    // creat treatment
    const handleSubmit = async (e) => {
        e.preventDefault()

        treatmentData.patientId = patientToAddTreatment.patientId;
        treatmentData.patientName = patientToAddTreatment.fullName;

        var medObject

        if(medicationsData.length === 1) {
            medObject = {
                name: medicationsData[0].name,
                rules: rulesData
            }

            treatmentData.medications.push(medObject)
        }
        dispatch(addTreatment(treatmentData, navigate))
        
        // clear treatment data
        clearTreatmentData()
    } 

    // add medication
    const prepareState = (e) => {
        e.preventDefault()

        // init the medications oject
        const medObject = {
            name: medicationsData[0].name,
            rules: rulesData
        }

        timeLineMed.push(medicationsData[0].name)
        
        // fill the medications in the treatment
        treatmentData.medications.push(medObject)

        // clear
        clear()
    }
    
    const clear = () => {
        setMedicationsData([
            { medicationId: '', name: '', rules: '' }
        ])
        setRulesData([
            {
                ruleId: '',
                rule: ''
            }
        ])
    }

    const clearTreatmentData = () => {
        setTreatmentData({
            patientId: '',
            patientName: '',

            // med name and rules
            medications: []
        })
        clear()
        setTimeLineMed([])
    }

    return (
        <Container>
            <Header />
            <Paper className={classes.paper} elevation={3}>
                <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant='h3' className={classes.title}>Add Treatment</Typography> 
                    <Typography variant='h4'>{patientToAddTreatment.fullName}</Typography> 

                    <TimeLineComponent data={timeLineMed} />

                    { 
                        medicationsData.map((medication, index) => (
                            <Paper className={classes.medslid} key={index}>
                                <Grid className={classes.inline}>
                                    <TextField className={classes.textfield}
                                        name='name'
                                        variant='outlined'
                                        fullWidth
                                        label='medication Name'
                                        value={medication.name}
                                        onChange={e => handleMedicationsInput(index, e)}
                                    />

                                </Grid>
                                {
                                    rulesData.map((ruledata, ind) => (
                                        <Grid key={ind}>
                                            <Grid className={classes.inline}>
                                                <TextField className={classes.textfield}
                                                    name='rule'
                                                    variant='filled'
                                                    label='medication rule'
                                                    value={ruledata.rule}
                                                    onChange={e => handleRulesInput(medication.name, ind, e)}
                                                />

                                                {
                                                    rulesData.length > 1 ? (
                                                        <IconButton>
                                                            <MdOutlineRemove onClick={handleRemoveRule} size='35' />
                                                        </IconButton>
                                                    ) : (
                                                        null
                                                    )
                                                }
                                                <IconButton onClick={handleAddRule}>
                                                    <MdAdd size='35' />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    ))
                                }
                            </Paper>
                        ))
                    }
                    <Grid className={classes.actions}>
                        <Button type='submit' className={classes.next} variant='contained' size='large' fullWidth onClick={prepareState}>Add Medication</Button>
                        <Button type='submit' className={classes.btnSubmit} variant='contained' size='large' fullWidth>Add Treatment</Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AddTreatment