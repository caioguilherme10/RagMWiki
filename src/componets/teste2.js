import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//import BarraE from './barraE';
import BarraD from './barraD';
import BarraE2 from './teste3';

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
  const { classes , name , handleClickButton} = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item sm={3}>
                <BarraE2 handleClickButton={handleClickButton}/>
            </Grid>
            <Grid item sm={9}>
                <BarraD name={name}/>
            </Grid>
        </Grid>
    </div>
  );
}


export default withStyles(styles)(AutoGridNoWrap);