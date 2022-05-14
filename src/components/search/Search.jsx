
//hooks
import { useState } from "react"
import { useDispatch } from "react-redux"

// material ui components
import { TextField, Button } from "@material-ui/core"

// icons
import { BsSearch } from 'react-icons/bs'

// actions
import { getSearchPatient } from '../../actions/patient'

// styles
import useStyles from './styles'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Search = () => {

    const notifyEmpty = () => {
        toast.success('Enter a name?', { position: toast.POSITION.TOP_CENTER })
    }

    const dispatch = useDispatch()
    const classes = useStyles()

    const [searchPatient, setSearchPatient] = useState('')

    const handleSearch = () => {
        if (searchPatient.length === 0) {
            notifyEmpty()
        } else {
            //search patient
            dispatch(getSearchPatient(searchPatient))
            setSearchPatient('')
        }
    }

    
    // const handleKeyPress = (e) => {

    //     if(e.keycode === 13) {
    //         handleSearch()
    //     }

    // }

    return (
        <div className={classes.searchBox} >
            <TextField 
            InputProps={{ disableUnderline: true }} 
            className={classes.textfield} 
            fullWidth 
            placeholder='search by name'
            value={searchPatient}
            onChange={(e) => setSearchPatient(e.target.value)}
            // onKeyPress={handleKeyPress}
            />
            <Button onClick={handleSearch} className={classes.btn}><BsSearch size='24' /></Button>
        </div>
    )
}

export default Search