import gql from 'graphql-tag';

export default gql`
  query($id: ID!) {
    klass(id: $id) {
      id
      name
      description
      startTime
      endTime
      teachers {
        name
      }
      students {
        name
      }
    }
  }
`;
