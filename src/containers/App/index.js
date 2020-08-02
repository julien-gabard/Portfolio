// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { menuButtonAction } from 'src/actions/actionApp';

// == Import component
import App from 'src/components/App';

// == Fonction props
const mapStateToProps = (state) => ({
  displayBoard: state.app.displayBoard,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleClick: () => {
    dispatch(menuButtonAction());
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
