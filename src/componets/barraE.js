import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonA from './tipoAS';
import ButtonB from './tipoBS';
import T from './teste';

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
  const { classes , handleClickButton} = props;

  return (
    <div className={classes.root}>
        
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Grid item xs>
                            <ButtonA handleClickButton={handleClickButton}/>
                            <ButtonB handleClickButton={handleClickButton}/>
                            <T/>
                        </Grid>
                    </Grid>
                </Paper>
            
    </div>
  );
}



export default withStyles(styles)(AutoGridNoWrap);