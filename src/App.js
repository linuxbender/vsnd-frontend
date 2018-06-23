import React, {Component, Fragment} from 'react';
import './App.css';
import Button from './components/Base/Button';
import Header from './components/Base/Header';
import I18 from './components/Base/I18';
import Search from './components/form/Search';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Search/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Button/>
                </p>
                <h2>Hello</h2>
                <I18 translate={i18 =>
                    <Fragment>
                        <h2>{i18('global.a')}</h2>
                        <Button text={i18('global.b')} />
                    </Fragment>
                }/>
                <I18 translate={i18 =>
                    <h4> {i18('global.d', '42')} </h4>
                }/>
                <I18 translate={i18 =>
                    <h4> {i18('global.e', 'Hallo', ' Welt ', '......42.......')} </h4>
                }/>
                <h2>Hello</h2>
            </div>
        );
    }
}

export default App;
