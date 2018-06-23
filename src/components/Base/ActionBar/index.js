import {setLanguageCode} from '../../../actions/uiAction';
import ActionBar from './ActionBar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isLoading: state.ui.isLoading
    }
};

const mapDispatchToProps = dispatch => ({
    onLanguageCode: languageCode => dispatch(setLanguageCode(languageCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);