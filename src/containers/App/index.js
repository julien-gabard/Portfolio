// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { menuButtonAction } from 'src/actions/actionApp';

// == Import component
import App from 'src/components/App';

// == Fonction props
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  displayBoard: state.displayBoard,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  onHandleClick: () => {
    dispatch(menuButtonAction());
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
