import { connect } from 'react-redux';

import {
  actionGetMyProfile,
} from 'store/actions';

import App from './App';

const mapStateToProps = (state) => ({
  me: state.Profile.me,
});
const mapDispatchToProps = (dispatch) => ({
  actionGetMyProfile: (payload) => dispatch(actionGetMyProfile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
