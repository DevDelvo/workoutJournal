import React from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from './SwipeableDrawer';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
}

class MenuAppBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <SwipeableDrawer />
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        <Link to="/home" className={classes.link}>
                            Heavy Lift Logger 
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}

MenuAppBar.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(MenuAppBar)