import { NextPage } from "next";

//mui imports
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        width: '100vw',
    }
}));

const Homepage: NextPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    )
}

export default Homepage;