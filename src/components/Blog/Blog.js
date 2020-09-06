import React, { useEffect, useState } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import UserDetails from '../UserDetails/UserDetails';

const useStyles = makeStyles((theme) => ({

    articles:{
        marginTop:'40px', 
    }

}));
const Blog = () => {
    const classes = useStyles();
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        const apiUrl = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiUrl)
        .then(res => res.json())
        .then(data=> setCart(data))

    },[])

    return (
        <div>
            <Container className={classes.articles}>
                <Typography variant="h4">
                   {/* Articles: {cart.length} */}
                </Typography>

                {
                    cart.map(info => <UserDetails details={info}></UserDetails>)
                }
            </Container>

        </div>
    );
};
export default Blog;