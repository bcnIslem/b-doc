// hooks
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// material ui components
import { Button, Menu, MenuItem, Fade } from "@material-ui/core";

// styles
import useStyles from "./styles";

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();
  const handleClose = (prop) => {
    setAnchorEl(null);
    setLang(prop);
    i18n.changeLanguage(prop);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.btn}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {t("Language.1")}
      </Button>
      <Menu
        className={classes.menu}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("en")}>En</MenuItem>
        <MenuItem onClick={() => handleClose("fr")}>Fr</MenuItem>
      </Menu>
    </div>
  );
};

export default Language;
