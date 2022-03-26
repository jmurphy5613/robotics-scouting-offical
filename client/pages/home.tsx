import { NextPage } from "next";

import Typed from 'react-typed';

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

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
        paddingTop: '12%',
        paddingLeft: '8%',
        
    },
    inerMainTitle: {
        color: '#fe5b77',
    }
}));

const Homepage: NextPage = () => {

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
            </div>

        </div>
    )
}

export default Homepage;