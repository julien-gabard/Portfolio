// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { menuButtonAction } from 'src/actions/actionMenu';

// == Import component
import Menu from 'src/components/Menu';

// == Fonction props
const mapStateToProps = (state) => ({
  displayBoard: state.menu.displayBoard,
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
)(Menu);
