import React from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Button, Typography, Collapse, Layout, Result } from 'antd';
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
                <Result
                    status={`${error}`}
                    title={`${error}`}
                    subTitle={message}
                    extra={<div>
                        <Link to="/" replace={true}>
                            <Button type="primary" icon="left">Zurück</Button>
                        </Link>
                        {retry && <Button type="default" onClick={retry}>Back Home</Button>}
                    </div>}
                />
                <Collapse className="collapse" bordered={false}>
                    <Panel header="Details">
                        <Typography.Text>
                            Errorcode: {error}
                        </Typography.Text>
                        <Typography.Text>
                            {messageProp &&
                                messageProp.split &&
                                messageProp.split('\n').map((paragraph, i) => (
                                    <React.Fragment key={i}>
                                        {paragraph}
                                        <br />
                                    </React.Fragment>
                                ))}
                        </Typography.Text>
                    </Panel>
                </Collapse>
            </Layout.Content>
        </Layout>
    );
}

export default withRouter(NotFoundPage);
