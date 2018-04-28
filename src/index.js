import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import NavbarComponent from './components/navbar/navbar';
import EditCompanyDetailsComponent from './components/edit-company-details/edit-company-details';
import registerServiceWorker from './registerServiceWorker';

const Route = ({ path, component }) => {
    const pathname = window.location.pathname;
    if (pathname === path) {
        return (
            React.createElement(component)
        );
    } else {
        //Error
        return null;
    }
};

render((
    <div>
    <NavbarComponent/>
    <Route path="/" component={App}/>
    <Route path="/edit" component={EditCompanyDetailsComponent}/>
    </div>), document.getElementById('root'));
registerServiceWorker();


if (module.hot) {
    module.hot.accept();
}
