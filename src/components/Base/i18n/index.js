import I18 from './I18';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        translations: state.ui.translation[state.ui.languageCode]
    }
};

export default connect(mapStateToProps)(I18);