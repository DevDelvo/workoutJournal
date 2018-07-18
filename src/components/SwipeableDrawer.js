import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-redux';
import { connect } from 'react-redux';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    logoutButton: {
        color: 'blue',
    }
}

class SwipeableTemporaryDrawer extends React.Component {
    state = {
        open: false
    };

    toggleDrawer = open => () => {
        this.setState({
            open
        })
    }

    render() {
        const { classes } = this.props;

        const loggedInList = (
            <div className={classes.list}>
                <List>
                    <Link to="/home">Home</Link>
                </List>
                <Divider />
                <List>
                    <Link to="/calendar">Calendar</Link>
                </List>
                <Divider />
                <List>
                    <Link to="/workOuts">Work outs</Link>
                </List>
                <Divider />
                <List>
                    <Link to="/profile">Profile</Link>
                </List>
            </div>
        )

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
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

export default SwipeableTemporaryDrawer