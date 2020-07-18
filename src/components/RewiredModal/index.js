import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

function RewiredModal({ open, onClose, children }) {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </Modal>
  );
}

RewiredModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default RewiredModal;
