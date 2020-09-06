import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    user:{
       border: '1px solid lightGray',
       padding:'20px',
       width: '40%',
       margin:'20px auto',
       borderRadius: '10px',
       boxShadow: '5px 5px 10px lightGray',
       backgroundColor:'#00bcd4',
       color: 'white'
    },
    button:{
        // display:'none',
        borderRadius: '10px',
    }

}))
const UserComments = () => {
    const {userInfo}= useParams();
  
    const[count, setCount] = useState([]);
    useEffect(()=>{
        const apiUrl = `https://jsonplaceholder.typicode.com/posts/${userInfo}`;
        fetch(apiUrl)
        .then(res => res.json())
        .then(data=> setCount(data))

    },[])

    const classes = useStyles();
    return (
        <div className={classes.user}>

            <h6>Post-ID:{userInfo}</h6>
            <h2>{count.title}</h2>
            <h5>Details:{count.body}</h5>
            <br/>
            <Button variant="contained" color="secondary" className={classes.button}>
               See Comment
            </Button>
          
        </div>


    );
};

export default UserComments;