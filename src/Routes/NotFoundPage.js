import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Button, Typography, Collapse, Layout } from 'antd';
import './NotFoundPage.less';
const { Panel } = Collapse;


function NotFoundPage(props) {
    const { retry, location } = props;
    const { pathname } = (location.state && location.state.referrer) || location;
    let { error = 0, message: messageProp } = location.state || props;

    if (!error) {
        return <Redirect to="/" />;
    }
    let message = {
        404: `${pathname} konnte nicht gefunden werden`,
        400: `${pathname} konnte nicht geladen werden`,
        500: `In ${pathname} ist ein interner Fehler aufgetreten.`,
    }[error];

    return (
        <Layout className="not-found-page">
            <Layout.Content className="main">
                <Typography.Title level={4}>
                    {message}
                </Typography.Title>
                <Link to="/" replace={true}>
                    <Button icon="left" size="large">Zurück</Button>
                </Link>
                {retry && <Button onClick={retry}>Erneut versuchen</Button>}
                <Collapse className="collapse" bordered={false}>
                    <Panel header="Details">
                        <div>
                            <Typography variant="body1" paragraph>
                                Errorcode: {error}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {messageProp &&
                                    messageProp.split &&
                                    messageProp.split('\n').map((paragraph, i) => (
                                        <React.Fragment key={i}>
                                            {paragraph}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </Typography>
                        </div>
                    </Panel>
                </Collapse>
            </Layout.Content>
        </Layout>
    );
}

// const styles = theme => ({
//     root: {
//         height: '100%',
//         width: '100%',
//         overflow: 'auto',
//         padding: `12.5% ${theme.spacing(4)}px`,
//         boxSizing: 'border-box',
//     },
//     paper: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexDirection: 'column',
//         padding: theme.spacing(2),
//     },
//     expansionPanel: {
//         '&:before': {
//             content: 'unset',
//         },
//     },
// });

export default withRouter(NotFoundPage);
