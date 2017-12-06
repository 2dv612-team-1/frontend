import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import PageContainer from "../components/PageContainer";
import RatingWidget from "../components/Rating";

const propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class ProductPage extends Component {
  state = {};
  product = this.props.products.filter(
    product => product._id === this.props.location.slice(-24)
  );
  product = this.product[0];
  /* Tillfallig losning
  product = {files : []};
  product.files.push("testprodukt 1");
  product.files.push("testprodukt 2");*/

  handleChange(rate, event) {
    console.log("yesbox");
    const fileName = event.target; // Denna funkar inte, ska hamta filnamn fr rating widget
    const url = `https://nanotu.be/products/${this.props.location.slice(
      -24
    )}/materials/${fileName}/rate`;
    this.props.postRate(url, event);
  }
  render() {
    return (
      <PageContainer title={this.product.name}>
        <p>Name: {this.product.name}</p>
        <p>Category: {this.product.category}</p>
        <p>Created By: {this.product.createdBy}</p>
        <p>Description: {this.product.description}</p>
        <p>Producer: {this.product.producer}</p>
        <p>Files:</p>
        <div>
          {this.product.files.map(file => (
            <div>
              <a href={`${API_HOST}/${file}`}>{file}</a>
              <RatingWidget
                ratingFor={file}
                onChange={this.handleChange}
                currentRating={file.rating}
              />
            </div>
          ))}
        </div>
        <RatingWidget
          ratingFor="test"
          currentRating="Har ska rating vara"
          onChange={this.handleChange}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  location: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  postRate: url => dispatch(ratingPostRate(url))
});

ProductPage.propTypes = propTypes;
export default connect(mapStateToProps)(ProductPage);
