import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import PageContainer from "../components/PageContainer";
import RatingWidget from "../components/Rating";
import { ratingPostRate } from "../../state/ratings/actions";

const propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class ProductPage extends Component {
  componentWillMount() {
    let product = this.props.products.filter(
      product => product._id === this.props.location.slice(-24)
    );

    console.log(product);
    product = product[0];
    console.log(product);
    this.setState({ product });
  }
  /* Tillfallig losning
  product = {files : []};
  product.files.push("testprodukt 1");
  product.files.push("testprodukt 2");*/

  handleChange(rate, event) {
    const fileName = event.target.materialName; // Denna funkar inte, ska hamta filnamn fr rating widget

    console.log(fileName);
    const url = `https://nanotu.be/products/${this.props.location.slice(
      -24
    )}/materials/${fileName}/rate`;
    this.props.postRate(url, event);
  }
  render() {
    return (
      <PageContainer title={this.state.product.name}>
        <p>Name: {this.state.product.name}</p>ratingPostRate
        <p>Category: {this.state.product.category}</p>
        <p>Created By: {this.state.product.createdBy}</p>
        <p>Description: {this.state.product.description}</p>
        <p>Producer: {this.state.product.producer}</p>
        <p>Files:</p>
        <div>
          {this.state.product.files.map(file => (
            <div>
              <a href={`${API_HOST}/${file}`}>{file}</a>
              <RatingWidget
                ratingFor={file}
                onClick={name => onClick(name)}
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
