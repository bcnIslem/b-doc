
//hooks
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"

//styles hook
import useStyles from './styles'

//material-iu components
import { Typography, Button, TextField, Paper, Container, Grid, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl } from "@material-ui/core"

// icons
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

//actions
import { signin } from '../../actions/auth'

// images
import BGI from '../../assets/login.jpg'

const Auth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState(
        { 
            userName: '',
            password: '', 
            showPassword: false 
        })

    const classes = useStyles()

    const handleClickShowPassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(signin(formData, navigate))
    }

    const styles = {
        bg: {
            backgroundImage: `url(${BGI})`,
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'darken'
        }
    };

    return(
    <div title='auth' style={styles.bg}>
        <Container className={classes.container} >
            <Grid container className={classes.grid}>
                <Grid item className={classes.gridItem} xs={12} md={8} lg={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <form title='form' autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                            <Typography className={classes.title} variant='h4'>Log In</Typography>
                            <TextField className={classes.textfield} title='userName' name='userName' variant='outlined' label='userName' fullWidth onChange={handleChange} />
                            
                            <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                type={formData.showPassword ? 'text' : 'password'}
                                title='password'
                                name='password'
                                variant='outlined'
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {formData.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label='Password'
                            />
                            </FormControl>
                            <Button className={classes.buttonSubmit} title='login' variant='contained' size='large' type='submit' fullWidth>Log In</Button>
                            <Typography style={{ textDecoration: 'none' }} className={classes.forget} component={Link} to='/forget-password' variant="body2" >forget password?</Typography>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
};

export default Auth