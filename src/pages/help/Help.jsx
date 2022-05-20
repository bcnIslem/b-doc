
// hooks
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// material ui component
import { Container, Grid, Typography } from '@material-ui/core'

// icons
import { BsInstagram, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

// styles
import useStyles from './styles'

const Help = () => {
    const classes = useStyles()

    const { t } = useTranslation()
    return (
        <Container >
        <Grid component={Link} to='/dashboard' className={classes.back}>
            <BsFillArrowLeftSquareFill size='35' color='#3be993' />
        </Grid>
        <Container className={classes.main}>
            <Grid className={classes.container}>
                <Typography className={classes.title} variant='body1'>{t('Help.1')}</Typography>
                <Grid className={classes.socialmedia}>
                        <a style={{ textDecoration: 'none' }} href='mailto:islemwilcher8@gmail.com'><AiOutlineMail size='45' color='#1ec9ff' /></a>
                        <a style={{ textDecoration: 'none' }} href='https://www.instagram.com/coding.islem/' target='_blank' rel="noreferrer"><BsInstagram  size='45' color='#c3207e' /></a>
                        <a style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/boucenina-seif-el-islem-ab34481b1' target='_blank' rel="noreferrer"><AiOutlineLinkedin size='45' color='#1ec9ff' /></a>
                </Grid>
            </Grid>
        </Container>
        </Container>
    )
}

export default Help