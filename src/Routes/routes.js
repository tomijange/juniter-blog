import React from 'react';
import { Route as BrowserRoute, Redirect } from 'react-router-dom';
import { withRouter, matchPath } from 'react-router';
import NotFoundPage from './NotFoundPage';
import { asynchronize } from './asynchronize';

const AppBar = asynchronize(() => import('./AppBar'));

const Main = asynchronize(() => import('../Main'));
const PostCreation = asynchronize(() => import("../Posts/Creation"));
const JsonOutput = asynchronize(() => import("../JsonOutput"));

const Route = props => {
    const renderComponent = React.useCallback(
        routerProps => {
            return <props.component {...props} {...routerProps} />;
        },
        [props]
    );
    return <BrowserRoute {...props} render={renderComponent} component={undefined} />;
};

const routeConfig = location => (
    <>
        <Route exact path="/" component={Main} noBoxShadow withApp />
        <Route exact path="/post/:slug?" component={PostCreation} withApp />
        <Route exact path="/json" component={JsonOutput} withApp />
        

        {/* errorhandling */}
        <Route exact path="/error" component={NotFoundPage} />
        <Redirect
            to={{
                pathname: '/error',
                state: { referrer: location, error: 404 },
            }}
            push
        />
    </>
);

class Routes extends React.Component {
    componentDidCatch(error, info) {
        if (process.env.NODE_ENV === 'development') {
            throw error;
        } else {
            const { location } = this.props;
            this.props.history.push({
                pathname: '/error',
                state: { referrer: location, error: 500, message: error.message + '\n' + info.componentStack },
            });
        }
    }

    render() {
        const { location } = this.props;

        let currentRoute, element, computedMatch;

        React.Children.forEach(routeConfig(location).props.children, (child, index) => {
            if (computedMatch || !React.isValidElement(child)) {
                return;
            }
            const route = child.props;
            const path = route.path || route.from;

            computedMatch = matchPath(location.pathname, { ...route, path });
            currentRoute = route;
            element = child;
        });

        let routeComponent = React.cloneElement(element, { location, computedMatch });

        // render AppBar 
        if (currentRoute.withApp) {
            return (
                <>
                    <AppBar {...currentRoute}>{routeComponent}</AppBar>
                </>
            );
        } else {
            return routeComponent;
        }
    }
}

export default withRouter(Routes);
