import React from 'react';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SignUpCategories from '../../components/SignUpCategories/SignUpCategories.component';
import SignUp from '../../components/SignUp/SignUp.component';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const SignUpPage = ({ category, handleCategoryClick }) => {
    const classes = useStyles();

    return (
        <div className="signup-page-container">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    {
                        category === 0
                        ?   <SignUpCategories handleCategoryClick={handleCategoryClick} />
                        :   category === 1
                            ?   <SignUp category={category} />
                            :   <SignUp category={category} />
                    }
                </div>
            </Container>
        </div>
    );
}

export default SignUpPage;