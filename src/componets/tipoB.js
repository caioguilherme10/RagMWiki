import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const message = `Tipo B `;

function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Grid item xs>
                            <Typography>{message}</Typography>
                        </Grid>
                    </Grid>
                </Paper>

    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);