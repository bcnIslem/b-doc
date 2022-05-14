
// hooks
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// material ui components
import { Grid, Paper, TextField, Typography, Button, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Container } from '@material-ui/core'

// actions 
import { updatedName, updatedQuestion, updatedPassword } from '../../actions/auth'

// icons
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

// styles
import useStyles from './styles'

const Settings = () => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('minaDoc-app')))

    const [doctorName, setDoctorName] = useState({
        firstName: user.result.firstName,
        lastName: user.result.lastName,
        userName: user.result.userName
    })

    const [doctorSecurity, setDoctorSecurity] = useState({
        securityQuestion: '',
        answerSecurityQuestion: '',
        showSecurityQuestion: false,
        showAnswerSecurityQuestion: false
    })

    const [doctorPassword, setDoctorPassword] = useState({
        currentPassword: '',
        password: '',
        confirmPassword: '',
        showCurrentPassword: false,
        showPassword: false,
        showConfirmPassword: false
    })

    // doctor name
    const handleNameSubmit = (e) => {
        e.preventDefault()

        const id = user.result._id
        dispatch(updatedName(id, doctorName))
    }

    // security question
    const handleClickShowSecurityQuestion = () => {
        setDoctorSecurity({
            ...doctorSecurity,
            showSecurityQuestion: !doctorSecurity.showSecurityQuestion,
        });
    };

    // answer security question
    const handleClickShowAnswerSecurityQuestion = () => {
        setDoctorSecurity({
            ...doctorSecurity,
            showAnswerSecurityQuestion: !doctorSecurity.showAnswerSecurityQuestion,
        });
    };

    // security question
    const handleChangeSecurityQuestion = (e) => {
        setDoctorSecurity({ ...doctorSecurity, [e.target.name]: e.target.value })
    }

    // doctor security
    const handleSecuritySubmit = (e) => {
        e.preventDefault()
        
        const id = user.result._id
        dispatch(updatedQuestion(id, doctorSecurity))

        clear()
    }

    // current password
    const handleClickShowCurrent = () => {
        setDoctorPassword({
            ...doctorSecurity,
            showCurrentPassword: !doctorPassword.showCurrentPassword,
        });
    };

    // password
    const handleClickShowPassword = () => {
        setDoctorPassword({
            ...doctorPassword,
            showPassword: !doctorPassword.showPassword,
        });
    };

    // confirm password
    const handleClickShowConfirmPassword = () => {
        setDoctorPassword({
            ...doctorPassword,
            showConfirmPassword: !doctorPassword.showConfirmPassword,
        });
    };

    // password
    const handleChangePassword = (e) => {
        setDoctorPassword({ ...doctorPassword, [e.target.name]: e.target.value })
    }

    // doctor password
    const handlePasswordSubmit = (e) => {
        e.preventDefault()

        const id = user.result._id
        dispatch(updatedPassword(id, doctorPassword))

        clear()
    }

    const clear = () => {
        setDoctorSecurity({ ...doctorSecurity, securityQuestion: '', answerSecurityQuestion: '' })

        setDoctorPassword({
            currentPassword: '',
            password: '',
            confirmPassword: '',
            showCurrentPassword: false,
            showPassword: false,
            showConfirmPassword: false
        })

    }

    return (
        <Container className={classes.main}>
                <Grid component={Link} to='/dashboard' className={classes.back}>
                    <BsFillArrowLeftSquareFill size='35' color='#3be993' />
                </Grid>
                <Grid className={classes.container} >

                <Paper className={classes.name} elevation={3}>
                    <form  autoComplete='off' noValidate className={classes.form} onSubmit={handleNameSubmit}>

                    <Typography variant='h5' >Name</Typography>
                    <TextField className={classes.textfield}
                        name='firstName' 
                        variant='outlined' 
                        label='first name'
                        fullWidth 
                        value={doctorName.firstName} 
                        onChange={(e) => setDoctorName({ ...doctorName, firstName: e.target.value })} />

                    <TextField className={classes.textfield}
                        name='lastName' 
                        variant='outlined' 
                        label='last name'
                        fullWidth 
                        value={doctorName.lastName} 
                        onChange={(e) => setDoctorName({ ...doctorName, lastName: e.target.value })} />

                    <TextField className={classes.textfield}
                        name='userName' 
                        variant='outlined' 
                        label='user name'
                        fullWidth 
                        value={doctorName.userName} 
                        onChange={(e) => setDoctorName({ ...doctorName, userName: e.target.value })} />

                    <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>Update</Button>
                    </form>
                </Paper>

                <Paper className={classes.name} elevation={3}>
                    <form  autoComplete='off' noValidate className={classes.form} onSubmit={handleSecuritySubmit}>

                    <Typography variant='h5' >Security Question</Typography>

                    <FormControl className={classes.textfield} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Security Question</InputLabel>
                        <OutlinedInput
                            type={doctorSecurity.showSecurityQuestion ? 'text' : 'password'}
                            title='securityQuestion'
                            name='securityQuestion'
                            variant='outlined'
                            value={doctorSecurity.securityQuestion}
                            onChange={handleChangeSecurityQuestion}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle security question visibility"
                                onClick={handleClickShowSecurityQuestion}
                                edge="end"
                                >
                                {doctorSecurity.showSecurityQuestion ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label='Security Question'
                        />
                    </FormControl>

                    <FormControl className={classes.textfield} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Answer for Security Question</InputLabel>
                        <OutlinedInput
                            type={doctorSecurity.showAnswerSecurityQuestion ? 'text' : 'password'}
                            title='answerSecurityQuestion'
                            name='answerSecurityQuestion'
                            variant='outlined'
                            value={doctorSecurity.answerSecurityQuestion}
                            onChange={handleChangeSecurityQuestion}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle answer security question visibility"
                                onClick={handleClickShowAnswerSecurityQuestion}
                                edge="end"
                                >
                                {doctorSecurity.showSecurityQuestion ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label='Answer for Security Question'
                        />
                    </FormControl>
                    
                    <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>Update</Button>
                    </form>
                </Paper>

                <Paper className={classes.name} elevation={3}>
                    <form autoComplete='off' noValidate className={classes.form} onSubmit={handlePasswordSubmit}>

                    <Typography variant='h5' >Password</Typography>
                    
                    <FormControl className={classes.textfield} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                        <OutlinedInput
                            type={doctorPassword.showCurrentPassword ? 'text' : 'password'}
                            title='currentPassword'
                            name='currentPassword'
                            variant='outlined'
                            value={doctorPassword.currentPassword}
                            onChange={handleChangePassword}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle current password visibility"
                                onClick={handleClickShowCurrent}
                                edge="end"
                                >
                                {doctorPassword.showCurrentPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label='Current Password'
                        />
                    </FormControl>

                    <FormControl className={classes.textfield} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            type={doctorPassword.showPassword ? 'text' : 'password'}
                            title='password'
                            name='password'
                            variant='outlined'
                            value={doctorPassword.password}
                            onChange={handleChangePassword}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle Password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                {doctorPassword.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label='Password'
                        />
                    </FormControl>

                    <FormControl className={classes.textfield} fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            type={doctorPassword.showConfirmPassword ? 'text' : 'password'}
                            title='confirmPassword'
                            name='confirmPassword'
                            variant='outlined'
                            value={doctorPassword.confirmPassword}
                            onChange={handleChangePassword}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle confirm password visibility"
                                onClick={handleClickShowConfirmPassword}
                                edge="end"
                                >
                                {doctorPassword.showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label='Confirm Password'
                        />
                    </FormControl>

                    <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>Update</Button>
                    </form>
                </Paper>

                </Grid>
        </Container>
    )
}

export default Settings