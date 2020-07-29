// == Import npm
import { connect } from 'react-redux';

// == Import actions

// == Import component
import Board from 'src/components/Board';

// == Fonction props
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  displayBoard: state.app.displayBoard,
});

const mapDispatchToProps = (/* dispatch */) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
