// == Import npm
import { connect } from 'react-redux';

// == Import component
import App from 'src/components/App';

// == Fonction props
const mapStateToProps = (/* state */) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
});

const mapDispatchToProps = (/* dispatch */) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
