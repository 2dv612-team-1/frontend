import React, { Component } from "react";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";

class ThreadPage extends Component {
  render() {
    return (
      <PageContainer title="Thread">
        <Text>This topic:</Text>
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}

export default ThreadPage;
