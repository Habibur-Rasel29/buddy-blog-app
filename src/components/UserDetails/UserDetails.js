import React from 'react';
import { Container, Typography, Grid, CardContent, CardActions, Button, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    container:{
      backgroundColor:'#f1f8e9',
    },
    card:{
        width:'1000px',
        marginLeft:'80px'
    }
}))
const UserDetails = (props) => {
    // console.log(props);

    const classes = useStyles();
    const{title, body, id} = props.details;

    return (
        <div>
            <Container className={classes.container}>
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                   {title}
                                </Typography>
                                <Typography variant="h5" component="h2"> 
                                   
                                </Typography>
                                <Typography color="textSecondary">
                                  
                                </Typography>
                                <Typography variant="body2" component="p">
                                  {body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button size="small"><p> <Link to={"/user/"+ id}>See More </Link></p></Button>
                              
                            </CardActions>
                        </Card>
                    </Grid>
                   

                </Grid>
                </Container>
        </div>
    );
};

export default UserDetails;