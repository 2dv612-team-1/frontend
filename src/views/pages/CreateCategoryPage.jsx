import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import CategoryForm from "../containers/CategoryForm";
import Text from "../elements/Text";
import { categoriesFetchData, categoriesClear } from "../../state/categories/actions";

const defaultProps = {
  loggedInAs: [],
  errorMessage: "",
  successMessage: "",
  categories: []
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

class CreateCategoryPage extends Component {
  componentWillMount() {
    this.props.clear();
    console.log("clear category");
  }

  componentDidMount() {
    this.props.fetchData("https://nanotu.be/categories");
  }

  componentWillUnmount() {
    this.props.clear();
    console.log("destroy cats");
  }

  render() {
    const parents = this.props.categories.map(parent => parent.category);
    parents.splice(0, 0, "Choose parent category");
    // console.log(parents);
    return (
      <PageContainer title="new category">
        <CategoryForm auth={this.props.loggedInAs} parents={parents} />
        {this.props.errorMessage ? <Text error>{this.props.errorMessage}</Text> : null}
        {this.props.successMessage ? <Text success>{this.props.successMessage}</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errorMessage: state.register.registerHasError.errorMessage,
  successMessage: state.register.registerPostDataSuccess.successMessage,
  isLoading: state.register.registerIsLoading,
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(categoriesFetchData(url)),
  clear: () => dispatch(categoriesClear())
});

CreateCategoryPage.defaultProps = defaultProps;
CreateCategoryPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryPage);
