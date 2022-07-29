import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    menubtn:{
        display: 'none',
        visibility: 'hidden'
    },
    paper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '250px',
        height: '100vh',
        zIndex: '30',
        backgroundColor: '#3be993',
        animation: `$slowEffect 500ms ${theme.transitions.easing.easeOut}`,
        '@media (orientation: landscape)': {
            height: 'auto',
        },
    },

    "@keyframes slowEffect": {
        "0%": {
            transform: "translateX(-100%)"
        },
        "100%": {
            transform: "translateX(0)",
        }
    },

    top: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3be993',
    },
    app: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        width: '180px',
        justifyContent: 'space-evenly',
    },
    gridOne:{
        width: '40px',
        height: '40px',
    },
    userName:{
        marginTop:' 20px',
        marginBottom:' 20px',
        display: 'flex',
        alignItems: 'center',
        width: '180px',
        justifyContent: 'space-evenly'
    },
    circle:{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display:' flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33A6FF',
        color: 'white',
        boxShadow: '2px 2px 6px black',
    },
    typo: {
        color: 'black',
    },
    stat: {
        marginTop: '20px',
        display: 'flex',
        width: '200px',
        justifyContent: 'space-around'
    },
    number: {
        display: 'flex',
        width: '95px',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3be993',
        padding: '5px 0px',
        textDecoration: 'none'
    },
    numberPatient: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f7f8fc",
        '&:hover': {
            boxShadow: '2px 2px 6px black'
        },
    },
    menu: {
        marginTop: '20px',
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3be993',
    },
    links: {
        margin: '10px 0px 5px 20px',
        width: '230px',
        display: 'flex',
        alignItems: 'flex-end',
        color: 'black',
        cursor:' pointer',
        padding: '5px 0px 5px 15px',
        '&:hover': {
            color: "black",
            backgroundColor: "#f7f8fc",
            borderRadius: '10px 0px 0px 10px'
        },
    },
    linksSelected: {
        margin: '10px 0px 5px 20px',
        width: '230px',
        display: 'flex',
        alignItems: 'flex-start',
        color: 'black',
        cursor:' pointer',
        backgroundColor: "#f7f8fc",
        padding: '5px 0px 5px 15px',
        borderRadius: '10px 0px 0px 10px',
        '&:hover': {
            color: "white",
            backgroundColor: '#33A6FF',
            borderRadius: '10px 0px 0px 10px'
        },
    },
    item: {
        marginLeft: '10px',
        textShadow: '1px 1px 1px gray'
    },
    developer: {
        marginTop: 'auto',
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        '@media (orientation: landscape)': {
            marginTop: '50px',
        },
    },

    [theme.breakpoints.down('md')]: {
        menubtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3be993',
            padding: '10px',
            borderRadius: '5px',
            margin: '5px 30px 5px auto',
            visibility: 'visible',
        },
        paper: {
            position: 'absolute',
        },
        hide: {
            display: 'none',
            visibility: 'hidden',
        }
    },
}))