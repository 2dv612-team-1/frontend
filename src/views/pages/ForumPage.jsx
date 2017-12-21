import React, { Component } from "react";

class ForumPage extends Component {
  render() {
    return (
      <PageContainer title="Forum">
        <Link to="/threads/new">
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
