import gql from 'graphql-tag';

export default gql`
  query($id: ID!) {
    studio(id: $id) {
      teachers {
        id
        name
      }
      students {
        id
        name
      }
    }
  }
`;
