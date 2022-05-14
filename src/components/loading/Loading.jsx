
import ReactLoading from 'react-loading';

import useStyles from './styles'

const Loading = ({ type, color, name }) => {

    const classes = useStyles()
    
    return (
        <div className={classes.container}>
            <ReactLoading type={type} color={color} height={100} width={100} />
            <h4>No {name} Yet!</h4>
        </div>
    )
};

export default Loading;