import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = theme => ({
    
});
function ButtonSizes(props) {
    const { classes , handleClickButton} = props;
    const tipoA = 'tipoA';
    return (
      
        <div onClick={() => handleClickButton(tipoA)}>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                Tipo A
            </Button>
        </div>
    
    );
}

export default withStyles(styles)(ButtonSizes);