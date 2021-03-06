import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import Client from "../../libs/Client";
import Jwt from "../../libs/Jwt";
import Auth from "../../libs/Auth";
import PageContainer from "../components/PageContainer";
import RatingWidget from "../components/Rating";
import NotesIcon from "../components/NotesIcon";
import Note from "../components/Note";
import { ratingPostRate } from "../../state/ratings/actions";
import { uploadMaterial } from "../../state/products/actions";
import Link from "../components/Link";
import Text from "../elements/Text";
import FileInput from "../components/FileInput";
import TableText from "../components/TableText";
import UploadContainer from "../components/UploadContainer";
import FilesContainer from "../components/FilesContainer";
import MaterialContainer from "../components/MaterialContainer";
import Button from "../components/Button";
import Flexdiv from "../components/Flexdiv";
const propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  location: PropTypes.string.isRequired,
  uploadMaterial: PropTypes.func.isRequired,
  postRate: PropTypes.func.isRequired,
  loggedInAs: PropTypes.shape({
    role: PropTypes.string
  }).isRequired
};

class ProductPage extends Component {
  state = {
    product: {},
    showNote: false,
    noteContent: "",
    file: "",
    currentNote: ""
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const id = this.props.location.slice(-24);
    const url = `${API_HOST}/products/${id}`;

    Client.GET(url).then(response => {
      const product = response.data.product;
      this.setState({ product });
    });
  };

  handleNoteClick = event => {
    event.stopPropagation();
    this.setState({ currentNote: event.target.getAttribute("name") });
    const url = `${API_HOST}/consumers/${Jwt.getUsername(
      Auth.getToken()
    )}/materials/${event.target.getAttribute("name")}/annotations`;
    Client.GET(url).then(noteContent => {
      noteContent = noteContent.data
        ? noteContent.data.annotations.annotations
        : "";
      this.setState({
        showNote: true,
        noteContent
      });
    });
    /*
    let noteContent = this.state.product.files.filter(
      file => file.material_id === event.target.getAttribute("name")
    );

    noteContent = noteContent[0];
    noteContent = noteContent.note;

    this.setState({
      showNote: true,
      noteContent
    });
    */
  };

  handleFileChange = ({ target }) => {
    const file = target.files[0];
    this.setState({ file });
  };

  handleFileUpload = event => {
    event.preventDefault();
    // Sen, köre fileuppladdning via actions i redux
    const id = this.props.location.slice(-24);
    const url = `${API_HOST}/products/${id}/materials`;
    this.props.uploadMaterial(url, this.state.file);
    this.getProducts();
  };

  handleNoteChange = event => {
    this.setState({ noteContent: event.target.value });
  };

  handleNoteCloseClick = () => {
    this.setState({ showNote: false });
    const url = `${API_HOST}/consumers/${Jwt.getUsername(
      Auth.getToken()
    )}/materials/${this.state.currentNote}/annotations`;
    const obj = {
      annotations: this.state.noteContent,
      jwt: Auth.getToken()
    };
    Client.POST(url, obj);
  };

  handleChange = (rate, event, name) => {
    const url = `${API_HOST}/products/${this.props.location.slice(
      -24
    )}/materials/${name}/rate`;
    this.props.postRate(url, rate);
  };
  render() {
    return (
      <PageContainer title={this.state.product.name}>
        <TableText>Name:</TableText>
        <Text>{this.state.product.name}</Text>
        <TableText>Category:</TableText>
        <Text>{this.state.product.category}</Text>
        <TableText>Created By:</TableText>
        <Text>{this.state.product.createdBy}</Text>
        <TableText>Description:</TableText>
        <Text>{this.state.product.description}</Text>
        <TableText>Producer:</TableText>
        <Text>{this.state.product.producer}</Text>
        <TableText>Files:</TableText>
        <FilesContainer>
          {this.state.product.files
            ? this.state.product.files.map(file => (
              <MaterialContainer key={file.name}>
                <Link
                  href={`${API_HOST}/materials/${
                    this.state.product.producer
                  }/${this.props.location.slice(-24)}/${file.filename}`}
                  name={file.filename}
                  newWindow
                />
                <Flexdiv>
                  <RatingWidget
                    ratingFor={file.material_id}
                    onClick={this.handleChange}
                    currentRating={file.average}
                    name={file.material_id}
                  />
                  <NotesIcon
                    id={file.material_id}
                    onClick={this.handleNoteClick}
                  />
                </Flexdiv>
              </MaterialContainer>
              ))
            : null}
          {this.state.showNote ? (
            <Note
              onChange={this.handleNoteChange}
              onClick={this.handleNoteCloseClick}
            >
              {this.state.noteContent}
            </Note>
          ) : null}
        </FilesContainer>
        {this.props.loggedInAs.role === "representative" ? (
          <form onSubmit={this.handleFileUpload}>
            <UploadContainer>
              <Text>Upload material to this product:</Text>
              <FileInput onChange={this.handleFileChange} />
            </UploadContainer>
            <Button submit>Upload</Button>
          </form>
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  location: state.router.location.pathname,
  loggedInAs: state.session.loggedInAs
});

const mapDispatchToProps = dispatch => ({
  postRate: (url, rate) => dispatch(ratingPostRate(url, rate)),
  uploadMaterial: (url, file) => dispatch(uploadMaterial(url, file))
});

ProductPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
