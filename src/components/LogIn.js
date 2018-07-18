import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const LogIn = props => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email">
                        <small>Email</small>
                    </label>
                    <input name="email" type="text" />
                </div>
                <div>
                    <label htmlFor="password">
                        <small>Password</small>
                    </label>
                    <input name="password" type="text" />
                </div>
                <div>
                    <button type="Submit">Submit</button>
                </div>
            </form>

            <div>
                <p>Don't have an account?</p>
                <Link to="/calendar"><button type="submit" >Signup</button></Link>
            </div>
        </div>
    )
}