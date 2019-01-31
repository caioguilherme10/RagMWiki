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
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const message1 = `Do level 1 ao 22 upa em quests.`;
const message2 = `Do level 22 ao 28 upa nos Wormtail.`;
const message3 = `Do level 28 ao 40 upa nos Thara Frogs e Skeletons.`;
const message4 = `Battle: mace mastery 10, blessing 10, increase agility 10, heal 5, kyrie eleison 5.`;
const message5 = `Full Support: blessing 10, increase agility 10, heal 10, kyrie eleison 10.`;


function AutoGridNoWrap(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Grid item xs>
                            <h1>Acolyte</h1>
                            <h3>Onde upar</h3>
                            <Typography>{message1}</Typography>
                            <Typography>{message2}</Typography>
                            <Typography>{message3}</Typography>
                            <h3>Skills</h3>
                            <Typography>{message4}</Typography>
                            <br></br>
                            <Typography>{message5}</Typography>
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