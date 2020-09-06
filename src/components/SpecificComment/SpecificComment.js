import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        padding: '20px',
    },
    card: {
        display: 'flex',
        width: '43%',
        margin: '20px auto',
        borderRadius: '10px'

    }
}));

const SpecificComment = () => {
    const { userInfo } = useParams();

    const [userComment, setUserComment] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${userInfo}`)
            .then(res => res.json())
            .then(data => setUserComment(data))

    }, [])

    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${userInfo}`)
            .then(res => res.json())
            .then(data => setImage(data))

    }, [])
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src={image.thumbnailUrl} alt="" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">

                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h2>Name: {userComment.name}</h2>
                        <p>Email: {userComment.email}</p>
                        <h5>{userComment.body}</h5>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>

        </div>
    );
};

export default SpecificComment;