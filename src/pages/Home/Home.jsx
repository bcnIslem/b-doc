
// hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/loading/Loading'

// components
import Header from '../../components/header/Header'
import Navbar from '../../components/nav/Navbar'
import LeftNave from '../../components/leftNav/LeftNave'
import Patient from '../../components/patient/Patient'

// ui components
import { Container, Paper, Grid, Typography } from "@material-ui/core"

// actions
import { getPatients } from '../../actions/patient'

// styles
import useStyles from './styles'

const Home = () => {

    const dispatch = useDispatch()

    let { patients } = useSelector((state) => state.patients)

    const classes = useStyles()

    const color='lightblue'
    const type='bars'
    const name = 'Pastients'

    useEffect(() => {
        dispatch(getPatients())
    }, [dispatch])

    return (
        <div className={classes.main}>
        <Container className={classes.container} title='home'>
            <Navbar />
            <Header />
            <Paper className={classes.paper} elevation={3}>
                <div className={classes.open}>
                <Grid className={`${classes.grid} ${classes.show}`}>
                    <Typography variant='h6'>Full Name</Typography>
                </Grid>
                <Grid className={`${classes.grid} ${classes.hide}`}>
                    <Typography variant='h6'>Phone</Typography>
                </Grid>
                <Grid className={`${classes.grid} ${classes.hide}`}>
                    <Typography variant='h6'>Birth Year</Typography>
                </Grid>
                <Grid className={`${classes.grid} ${classes.hide}`}>
                    <Typography variant='h6'>Sex</Typography>
                </Grid>
                <Grid className={`${classes.griddesc} ${classes.hide}`}>
                    <Typography variant='h6'>Description</Typography>
                </Grid>
                </div>
                <div className={classes.actions}>
                <Typography variant='h6'>Actions</Typography>
                </div>
                </Paper>
                <Grid className={classes.table}>
                    {!patients?.length
                        ? (<Loading color={color} type={type} name={name} />)
                        : patients?.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
                        .map(
                                (item) => 
                                (
                                <Grid className={classes.table} item key={item._id}>
                                    <Patient item={item} key={item._id} />
                                </Grid>
                                )
                            )
                    }
                </Grid>
        </Container>
        </div>
    )
}

export default Home