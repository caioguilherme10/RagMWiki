import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TipoA from './tipoA';
import TipoB from './tipoB';
import Acolyte from './iacolyte';
import Priest from './ipriest';
import HighPriest from './ihighpriest';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function AutoGridNoWrap(props) {
  const { classes ,name } = props;
  const tipoA = 'tipoA'
  const tipoB = 'tipoB'
  const acolyte = 'acolyte'
  const priest = 'priest'
  const highpriest = 'highpriest'

  return (
    <div className={classes.root}>
        {name===tipoA && <TipoA/>}
        {name===tipoB && <TipoB/>}
        {name===acolyte && <Acolyte/>}
        {name===priest && <Priest/>}
        {name===highpriest && <HighPriest/>}
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);