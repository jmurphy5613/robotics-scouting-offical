import { NextPage } from "next";

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
        fontSize: '1rem'
    },
    mainTitle: {
        fontFamily: theme.typography.fontFamily.primary,
        color: '#ffffff',
        fontWeight: '600'
    },
    descriptionTitle: {
        fontFamily: theme.typography.fontFamily.tertiary,
        color: '#b2bAc2'
    }
}));

const Homepage: NextPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Typography variant="h5" className={classes.smallTitle}>
                    Scouting Application
                </Typography>
                <Typography variant="h2" className={classes.mainTitle}>
                    Scout the right way with ease
                </Typography>
                <Typography variant="h6" className={classes.descriptionTitle}>
                    Jordan is a new public scouting solution built by team 484 that hopes to bring a professional applicaition to the FRC sphere.
                </Typography>
            </div>

        </div>
    )
}

export default Homepage;