import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    loading: {
        display: 'flex',
        flexDirection: 'column',
        margin: ' 30px auto',
        width: '100%',
        opacity: '0.3',
        alignItems: 'center',
        color: 'gray',
    },
    main: {
        display: 'flex',
        overflow: 'hidden',
        height: '100vh'
    },
    mainRight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        overflowY: 'scroll',
    },
    right: {
        width: '100%',
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    insideright: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        height: '320px',
        '&:hover': {
            boxShadow: '2px 2px 6px black',
        },
    },

    insideleft: {
        width: '64%',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    top: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    topChart: {
        width: '100%',
        display: 'flex',
        '&:hover': {
            boxShadow: '2px 2px 6px gray',
        },
    },
    chart: {
        width: '100%',
    },
    topPaper: {
        display: 'flex',
        backgroundColor: '#3be993',
        alignItems: 'center',
        width: '30%',
        height: '60px',
        textDecoration: 'none',
        '&:hover': {
            boxShadow: '2px 2px 6px black',
        },
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '10px',
    },
    gridtitle: {
        marginLeft: '10px',
    },
    botomRight: {
        display: 'flex',
        margin: '40px 0px',
        justifyContent: 'center',
    },
    botomRightgrid: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '98%',
        justifyContent: 'space-between',
    },
    bottonPaper: {
        width: '30%',
        height: '320px',
        '&:hover': {
            boxShadow: '2px 2px 6px black',
        },
    },
    datePaper: {
        width: '30%',
        height: '320px',
        '&:hover': {
            boxShadow: '2px 2px 6px black',
        },
    },
    cerclePaper: {
        width: '30%',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        '&:hover': {
            boxShadow: '2px 2px 6px black',
        },
    },
    scroll: {
        margin: 'auto 0px 0px 0px',
        height: '80%',
        overflow: 'hidden',
        overflowY: 'scroll',
    },

    datepatients:{
        height: '19%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateGrid:{
        display: 'flex',
        overflowY: 'scroll',
        borderBottom: '1px solid gray',
    },
    dateitem:{
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '0px',
        zIndex: 2,
        width: '100%',
        '&:hover': {
            backgroundColor: '#ebefff',
        },
    },
    actions:{
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '20px',
        
        textAlign: 'center',
    },
    datetext:{
        zIndex: 5,
        padding: '10px',
    },
    open:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '0px',
        cursor: 'pointer',
        zIndex: 9,
        '&:hover': {
            backgroundColor: '#F6F6F6',
        },
    },
    color:{
        width: '90%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    coloritems:{
        width: '30%',
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        color: '#3be993',
        '&:hover': {
            color: "black",
        }
    },

    [theme.breakpoints.down('xl')]: {

    },

    [theme.breakpoints.down('lg')]: {

    },
    
    [theme.breakpoints.down('md')]: {
        right: {
            flexDirection: 'column',
        },
        insideleft: {
            height: 'auto',
            width: '100%',
        },
        topChart: {
            margin: '20px 0px 40px 0px'
        },
        insideright: {
            width: '100%',
        },
        botomRightgrid: {
            flexDirection: 'column-reverse',
        },
        bottonPaper: {
            marginTop: '40px',
            width: '100%'
        },
        cerclePaper: {
            marginTop: '40px',
            width: '100%'
        },
        datePaper: {
            width: '100%'
        },
        main: {
            flexDirection: 'column'
        },
        hide: {
            display: 'none',
            visibility: 'hidden'
        }

    },

    [theme.breakpoints.down('sm')]: {
        topPaper: { 
            width: '32%',
            marginBottom: '20px'
        },
    },
    [theme.breakpoints.down('xs')]: {
        top: {
            //overflow: 'hidden',
            overflowX: 'scroll',
            // width: '200vw',
            '&::-webkit-scrollbar': {
            height: '2px',
            },
            '&::-webkit-scrollbar-thumb' :{
            background: '#2679d7',
            },
        },
        topPaper: { 
            width: '55vw !important',
            padding: '2px 30px',
            margin: '0px 20px 20px 0px'
        },
    },
}))