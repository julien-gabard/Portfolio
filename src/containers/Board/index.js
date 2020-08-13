// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { menuButtonAction } from 'src/actions/actionMenu';

// == Import component
import Board from 'src/components/Board';

// == Fonction props
const mapStateToProps = (state) => ({
  displayBoard: state.menu.displayBoard,
});

const mapDispatchToProps = (dispatch) => ({
  clickBoardLink: () => {
    dispatch(menuButtonAction());
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
