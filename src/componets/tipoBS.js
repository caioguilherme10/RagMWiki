import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    
});
function ButtonSizes(props) {
    const { classes , handleClickButton} = props;
    const tipoB = 'tipoB';
    return (
      
        <div onClick={() => handleClickButton(tipoB)}>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                Tipo B
            </Button>
        </div>
    
    );
}


ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);