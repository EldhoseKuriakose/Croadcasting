import React from 'react';
import Grid from '@material-ui/core/Grid';
import SignUpCategory from '../SignUpCategory/SignUpCategory.component';

const SignUpCategories = ({ handleCategoryClick }) => {
    const recruiterImage = "https://www.jobsoid.com/wp-content/uploads/2017/01/How-to-go-from-being-Good-to-Great-as-a-Recruiter.jpg";
    const jobSeekerImage = "https://www.naukriguru.com/jobseeker/images/employer.jpg";

    return (
        <div className="sign-up-categories-container">
            <Grid container spacing={1}>
                <Grid item xs={12} onClick={() => handleCategoryClick(1)}>
                    <SignUpCategory text="Sign Up" title="Job Seeker" imageUrl={jobSeekerImage} />
                </Grid>
                <Grid item xs={12} onClick={() => handleCategoryClick(2)}>
                    <SignUpCategory text="Sign Up" title="Recruiter" imageUrl={recruiterImage} />
                </Grid>
            </Grid>
        </div>
    );
}

export default SignUpCategories;