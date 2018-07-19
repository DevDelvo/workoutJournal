import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from './SwipeableDrawer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        color: 'white'
    }
}

class MenuAppBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <SwipeableDrawer />
                    <Typography
                        variant="title"
                        color="inherit"
                        className={styles.flex}
                    >
                        <Link to="/home" className={styles.link}>
                            Lifting Journal
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}

MenuAppBar.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default MenuAppBar