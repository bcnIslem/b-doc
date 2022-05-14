
import React from 'react'
// material ui components
import { Button, Menu, MenuItem, Fade  } from '@material-ui/core'

// styles
import useStyles from './styles'

const Language = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()

    return (
        <div>
        <Button
            className={classes.btn}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Languages
        </Button>
        <Menu
            className={classes.menu}
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem onClick={handleClose}>Eng</MenuItem>
            <MenuItem onClick={handleClose}>Fr</MenuItem>
        </Menu>
        </div>
    )
}

export default Language