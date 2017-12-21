import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";

class ForumPage extends Component {
  render() {
    return (
      <PageContainer title="Forum">
        <Link to="/thread/new">
          <Button>Create new topic</Button>
        </Link>
        <Text>Forum topics:</Text>
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}

export default ForumPage;
