import React, {Component} from 'react';
import './App.css';
import ActionBar from './components/Base/ActionBar';
import Button from './components/Base/Button';
import Header from './components/Base/Header';
import I18 from './components/Base/i18n';
import Translate from './components/Base/Translate';
import Search from './components/form/Search';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Search/>
                <br />
                <ActionBar />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Button/>
                </p>
                <h2>Hello</h2>
                <h2><Translate>global.a</Translate></h2>
                <Button><Translate>global.b</Translate></Button>

                <I18 translate={i18 =>
                    <h4> {i18('global.d', '42')} </h4>
                }/>
                <I18 translate={i18 =>
                    <h4> {i18('global.e', 'Hallo', ' Welt ', '......42.......')} </h4>
                }/>
                <h2>Hello</h2>
                <Translate>global.a</Translate>
            </div>
        );
    }
}

export default App;
