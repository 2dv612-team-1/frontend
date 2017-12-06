import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import Client from "../../libs/Client";
import PageContainer from "../components/PageContainer";
import RatingWidget from "../components/Rating";
import NotesIcon from "../components/NotesIcon";
import Note from "../components/Note";
import { ratingPostRate } from "../../state/ratings/actions";

const propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class ProductPage extends Component {
  state = {
    product: {},
    showNote: false,
    noteContent: ""
  };
  componentDidMount() {
    // Temp fix för hårdkodad produkt med fejk filer i state
    const id = this.props.location.slice(-24);
    const url = `https://nanotu.be/products/${id}`;

    if (id !== "dfGKJGhhgddddddddddddddd") {
      Client.GET(url).then(response => {
        console.log(response);
        const product = response.data.product;
        this.setState({ product });
      });
    } else {
      let product = this.props.products.filter(product => product._id === id);

      product = product[0];
      this.setState({ product });
    }
  }
  /* Tillfallig losning
  product = {files : []};
  product.files.push("testprodukt 1");
  product.files.push("testprodukt 2");*/

  handleNoteClick = event => {
    event.stopPropagation();
    let noteContent = this.state.product.files.filter(
      file => file.material_id === event.target.getAttribute("name")
    );

    noteContent = noteContent[0];
    noteContent = noteContent.note;

    this.setState({
      showNote: true,
      noteContent
    });
  };

  handleNoteChange = event => {
    this.setState({ noteContent: event.target.value });
  };

  handleNoteCloseClick = () => {
    this.setState({ showNote: false });
  };

  handleChange = (rate, event) => {
    console.log("rate: " + rate);
    const fileName = event.target; // Denna funkar inte, ska hamta filnamn fr rating widget
    console.log(fileName);

    const url = `https://nanotu.be/products/${this.props.location.slice(
      -24
    )}/materials/${fileName}/rate`;
    this.props.postRate(url, event);
  };
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
          {this.state.product.files
            ? this.state.product.files.map(file => (
                <div>
                  <a href={`${API_HOST}/${file.name}`}>{file.name}</a>
                  <RatingWidget
                    name={file.name}
                    ratingFor={file.name}
                    onClick={this.handleChange}
                    currentRating={file.average}
                  />
                  <NotesIcon
                    id={file.material_id}
                    onClick={this.handleNoteClick}
                  />
                </div>
              ))
            : null}
        </div>
        {this.state.showNote ? (
          <Note
            onChange={this.handleNoteChange}
            onClick={this.handleNoteCloseClick}
          >
            {this.state.noteContent}
          </Note>
        ) : null}
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
