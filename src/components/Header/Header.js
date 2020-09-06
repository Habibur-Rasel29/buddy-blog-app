import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
       
        backgroundColor: "#a5d6a7",
        height: '80px',
        marginBottom: '0px'
    },
    header:{
        justifyContent:"space-around",

    }

}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static" >
                    <Toolbar  className={classes.header}>
                        <Typography variant="h6">
                        <Link href="/home">Home</Link>
                        </Typography>
                        <Typography variant="h6">
                        <Link href="/blog">Blog</Link>
                        </Typography>
                        <Typography variant="h6">
                        <Link href="/login">SigIn</Link>
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
            </div>
          
        </div>
    );
};

export default Header;