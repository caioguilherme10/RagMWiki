import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
//import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  nested1: {
    paddingLeft: theme.spacing.unit * 6,
  },
});

class NestedList extends React.Component {
  state = {
    classes: false,
    acolyte: false,
    magician: false,
    swordsman: false,
    archer: false,
    thief: false,
    merchant: false,
  };

  handleClickClasses = () => {
    this.setState(state => ({ classes: !state.classes}));
  }

  handleClickAcolyte = () => {
    const acolyte = 'acolyte'
    this.setState(state => ({ acolyte: !state.acolyte}));
    this.props.handleClickButton(acolyte);
  }

  handleClickMagician = () => {
    const tipoA = 'tipoA'
    this.setState(state => ({ magician: !state.magician}));
    this.props.handleClickButton(tipoA);
  }

  handleClickSwordsman = () => {
    const tipoB = 'tipoB'
    this.setState(state => ({ swordsman: !state.swordsman}));
    this.props.handleClickButton(tipoB);
  }

  handleClickArcher = () => {
    const tipoA = 'tipoA'
    this.setState(state => ({ archer: !state.archer}));
    this.props.handleClickButton(tipoA);
  }

  handleClickThief = () => {
    const tipoB = 'tipoB'
    this.setState(state => ({ thief: !state.thief}));
    this.props.handleClickButton(tipoB);
  }

  handleClickMerchant = () => {
    const tipoA = 'tipoA'
    this.setState(state => ({ merchant: !state.merchant}));
    this.props.handleClickButton(tipoA);
  }

  render() {
    const { classes } = this.props;
    const tipoA = 'tipoA'
    const tipoB = 'tipoB'
    const priest = 'priest'
    const highpriest = 'highpriest'

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div"></ListSubheader>}
        className={classes.root}
      >
        <ListItem button onClick={this.handleClickClasses}>
          <ListItemText inset primary="Classes" />
          {this.state.classes ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.classes} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText inset primary="Novice" onClick={() => this.props.handleClickButton(tipoB)}/>
            </ListItem>
            <ListItem button className={classes.nested} onClick={this.handleClickAcolyte} >
              <ListItemText inset primary="Acolyte" />
              {this.state.acolyte ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.acolyte} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Priest" onClick={() => this.props.handleClickButton(priest)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="High Priest" onClick={() => this.props.handleClickButton(highpriest)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Monk" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Champion" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
            <ListItem button className={classes.nested} onClick={this.handleClickMagician}>
              <ListItemText inset primary="Magician" />
              {this.state.magician ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.magician} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Wizard" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="High Wizard" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
            <ListItem button className={classes.nested} onClick={this.handleClickSwordsman}>
              <ListItemText inset primary="Swordsman" />
              {this.state.swordsman ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.swordsman} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Knight" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Lord Knight" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Crusader" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Paladin" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
            <ListItem button className={classes.nested} onClick={this.handleClickArcher}>
              <ListItemText inset primary="Archer" />
              {this.state.archer ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.archer} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Hunter" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Sniper" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
            <ListItem button className={classes.nested} onClick={this.handleClickThief}>
              <ListItemText inset primary="Thief" />
              {this.state.thief ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.thief} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Assassin" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Assassin Cross" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Aogue" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Stalker" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
            <ListItem button className={classes.nested} onClick={this.handleClickMerchant}>
              <ListItemText inset primary="Merchant" />
              {this.state.merchant ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.merchant} timeout="auto" unmountOnExit>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Blacksmith" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Whitesmith" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Achemist" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
              <ListItem button className={classes.nested1}>
                <ListItemText inset primary="Creator" onClick={() => this.props.handleClickButton(tipoA)}/>
              </ListItem>
            </Collapse>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);