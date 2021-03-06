import React, { Component } from 'react';
import { Container, Paper, Typography, createMuiTheme, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = {
    root: {
        padding: theme.spacing(3, 2),
    },
}

class Dashboard extends Component {
    state = {  }
    render() { 
        const {classes} = this.props;
        return ( <React.Fragment>
            <Container>
                <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        Dashboard
                    </Typography>
                    <Divider style = { {marginTop: 15, marginBottom: 15} }/>
                    <Typography component="p">
                    
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment> );
    }
}
 
const mapStateToProps = store => store;

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));