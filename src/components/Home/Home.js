import React from 'react';
import { Container, Button, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    body:{
        margin: '0px',
        height:'600px',
        padding:'0px',
        backgroundColor: '#ffff',
        marginTop:'50px',
       
    }
 
}));
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Container className={classes.contain}>
                <h1>Publish your passions, your way
                Create a unique and beautiful blog. It’s easy and free. </h1>
                <Link to="/blog">
                <Button variant="contained" color="primary" href="#contained-buttons">
                 <p> See Our Blog </p>
                </Button>
                </Link>
            </Container>
        </div>
    );
};

export default Home;