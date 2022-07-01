
// hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import ReactImageFileToBase64 from "react-file-image-to-base64"

// components
import Header from "../../components/header/Header"

// actions
import { addMedicalFolder } from "../../actions/medicalFolder"

// material ui components
import { Container, Paper, Grid, Typography, TextField, Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'

// icons
import { MdOutlineRemove, MdAdd } from 'react-icons/md'

import useStyles from './styles'

const AddMEdicalFolder = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const { t } = useTranslation()

    const patientToAddMedicalFolder = useSelector((state) => state.patients.patientToAddMedicalFolder)

    const [folderData, setFolderData] = useState([])

    const [medicalFolderData, setMedicalFolderData] = useState({
        patientId: '',
        title: '',
        folder: []
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        medicalFolderData.patientId = patientToAddMedicalFolder.patientId;

        //setMedicalFolderData({ ...medicalFolderData, folders: folderData });
        medicalFolderData.folder.push(folderData);

        console.log('medical folder: ', medicalFolderData)

        dispatch(addMedicalFolder(medicalFolderData, navigate));
        clear()
    }

    const handleOnCompleted = files => {
        files.map((file) => {
            folderData.push(file.base64_file)
        })

        console.log('folder:', folderData)
    };

    const clear = () => {
        setFolderData([])

        setMedicalFolderData({
            patientId: '',
            title: '',
            folder: []
        })
    }
    return (
        <Container>
            <Header />
            <Paper className={classes.paper} elevation={3}>
                <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h3' className={classes.title}>Add Medical Folder</Typography> 
                <Typography variant='h4'>{patientToAddMedicalFolder.fullName}</Typography>

                <Paper className={classes.input} >
                    <Grid className={classes.folder}>
                        <TextField className={classes.textfield}
                            name='title'
                            variant='outlined'
                            fullWidth
                            label='folder title'
                            value={medicalFolderData.title}
                            onChange={(e) => setMedicalFolderData({ ...medicalFolderData, title: e.target.value })}
                        />
                        <div className={classes.folderBtn}>
                        <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted} />
                        </div>
                    </Grid>
                </Paper>
                <Grid className={classes.actions}>
                    <Button type='submit' className={classes.btnSubmit} variant='contained' size='large' fullWidth>add folder</Button>
                </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AddMEdicalFolder