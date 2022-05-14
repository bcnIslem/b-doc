
// components
import LeftNave from '../../components/leftNav/LeftNave'
import Form from '../../components/Form/Form'

// material ui components
import { Container } from '@material-ui/core'

// styles
import useStyles from './styles'

const Add = () => {

  const classes = useStyles()

  return (
    <div className={classes.main}>
      <LeftNave />
      <Container className={classes.container}>
        <div className={classes.div} title='add'>
          <Form />
        </div>
      </Container>
    </div>
  )
}

export default Add