// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { clickShowIcons } from 'src/actions/actionFooter';

// == Import component
import Footer from 'src/components/Footer';

// == Fonction props
const mapStateToProps = (state) => ({
  showIcons: state.footer.showIcons,
});

const mapDispatchToProps = (dispatch) => ({
  clickShowIcons: () => {
    dispatch(clickShowIcons());
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
