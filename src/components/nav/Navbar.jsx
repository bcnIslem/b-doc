
// components
import Search from '../search/Search'

// material ui components
import { Paper } from '@material-ui/core'

// styles
import useStyles from './styles'

const Navbar = () => {

    const classes = useStyles()

    return (
        <Paper className={classes.paper} elevation={3} position='static'>
            <div className={classes.search}>
                <Search />
            </div>
        </Paper>
    )
}

export default Navbar