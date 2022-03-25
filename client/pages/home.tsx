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
        fontFamily: theme.typography.fontFamily.primary
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
                <Typography variant="h2">
                    Scout the right way with ease
                </Typography>
                <Typography variant="h4">
                    Jordan is a new public scouting solution built by team 484 that hopes to bring a professional applicaition to the FRC sphere.
                </Typography>
            </div>

        </div>
    )
}

export default Homepage;