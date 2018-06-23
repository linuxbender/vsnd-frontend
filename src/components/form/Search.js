import React, {Component, Fragment} from 'react';
import Button from '../Base/Button/Button';

class Search extends Component {

    render() {
        return (
            <Fragment>
                <label></label>
                <input type='text' name='searchVSND' />
                <Button />
            </Fragment>
        )
    }
}

export default Search;