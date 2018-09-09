import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const styles = {
    fullList: {
        width: 'auto',
        backgroundColor: 'black',
    },
    list: {
        color: 'black',
        margin: '.5em',
        lineHeight: 1.8,
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    divide: {
        backgroundColor: 'blue',
        height: "5px",
    },
    logoutButton: {
        color: 'blue',
    }
}

class SwipeableTemporaryDrawer extends React.Component {
    state = {
        open: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
            open,
        })
    }

    render() {
        const { classes } = this.props;

        const loggedInList = (
            <div className={classes.list}>
                <List>
                    <Link className={classes.list} to="/home" >Home</Link>
                </List>
                <Divider className={classes.divide} />
                <List >
                    <Link className={classes.list} to="/calendar">Calendar</Link>
                </List>
                <Divider className={classes.divide} />
                <List>
                    <Link className={classes.list} to="/workOuts">Work outs</Link>
                </List>
                <Divider className={classes.divide} />
                <List>
                    <Link className={classes.list} to="/profile">Profile</Link>
                </List>
            </div>
        )

        return (
            <div>
                 <IconButton
                    aria-owns={open ? 'menu-appbar' : null} //eslint-disable-line
                    aria-haspopup="true"
                    onClick={this.toggleDrawer(true)}
                    color="inherit"
                    >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                    {loggedInList}
                    </div>
                </SwipeableDrawer>
            </div>
        )
    }
}

SwipeableTemporaryDrawer.propTypes = {
    styles: propTypes.object.isRequired
}

export default withStyles(styles)(SwipeableTemporaryDrawer)