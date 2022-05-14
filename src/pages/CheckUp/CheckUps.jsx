
// hooks
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


// material ui components
import { Container, Grid, Typography, Paper } from '@material-ui/core'

// components
import Header from '../../components/header/Header'
import LeftNave from '../../components/leftNav/LeftNave'
import CheckUp from '../../components/checkup/CheckUp'
import Loading from '../../components/loading/Loading'

// actions
import { getAllCheckUps } from '../../actions/checkUp'

// styles
import useStyles from './styles'

const CheckUps = () => {

    const { checkUps } = useSelector((state) => state.checkUps)
    const dispatch = useDispatch()
    const classes = useStyles()

    const color='lightblue'
    const type='bars'
    const name='CheckUps'

    useEffect(() => {
        dispatch(getAllCheckUps())
    }, [checkUps, dispatch])
    
    return (
        <div className={classes.main}>
            <Container className={classes.Container}>
                <Header />
                <Paper className={classes.paper} elevation={3}>
                <div className={classes.open}>
                <Grid className={classes.grid}>
                    <Typography variant='h6'>Full Name</Typography>
                </Grid>
                <Grid className={`${classes.gridtests} ${classes.hide}`}>
                    <Typography variant='h6'>Tests</Typography>
                </Grid>
                </div>
                <div className={classes.actions}>
                <Typography variant='h6'>Actions</Typography>
                </div>
                </Paper>
                <Grid className={classes.table}>
                    {!checkUps?.length
                        ? (<Loading color={color} type={type} name={name}/>)
                        : checkUps?.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
                        .map(
                                (item) => 
                                (
                                <Grid item key={item._id}>
                                    <CheckUp item={item} key={item._id} />
                                </Grid>
                                )
                            )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default CheckUps