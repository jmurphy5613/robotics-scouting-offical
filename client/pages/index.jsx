import { NextPage } from "next";

import Typed from 'react-typed';

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        width: '100vw',
    },
    textContainer: {
        marginLeft: '20%'
    },
    smallTitle: {
        fontFamily: theme.typography.fontFamily.secondary,
        fontSize: '1rem',
        color: '#fe5b77',
        marginBottom: '1.7rem'
    },
    mainTitle: {
        fontFamily: theme.typography.fontFamily.primary,
        color: '#ffffff',
        fontWeight: '600'
    },
    descriptionTitle: {
        fontFamily: theme.typography.fontFamily.tertiary,
        color: '#b2bAc2',
        marginTop: '1.7rem'
    },
    titleMargin: {
        width: '45%',
        paddingTop: '16%',
        paddingLeft: '10%',
        
    },
    inerMainTitle: {
        color: '#fe5b77',
    },
    landingPageButton: {
        backgroundColor: '#6c56d2',
        color: '#ffffff',
        fontFamily: theme.typography.fontFamily.secondary,
        textTransform: 'none',
        marginTop: '1.7rem',
        width: '9rem',
        height: '3.2rem',
        '&:hover': {
            backgroundColor: '#6c56d2',
        }
    }
}));

const Home = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.titleMargin}>
                <Typography variant="h5" className={classes.smallTitle}>
                    Scouting Application
                </Typography>
                <Typography variant="h2" className={classes.mainTitle}>
                    {`Scout the right way with ease on ` }
                    
                    <Typed 
                        className={classes.inerMainTitle}
                        strings={['IOS', 'Android', 'Web']}
                        loop
                        typeSpeed={60}
                        backSpeed={60}
                    />
                </Typography>
                <Typography variant="h6" className={classes.descriptionTitle}>
                    Jordan is a new public scouting solution built by team 484 that hopes to bring a professional applicaition to the FRC sphere.
                </Typography>
                <a href="/downloads" style={{textDecoration: 'none', color: '#ffffff'}}>
                  <Button variant="contained" className={classes.landingPageButton}>Try Now</Button>
                </a>

            </div>

        </div>
    )
}

export default Home;