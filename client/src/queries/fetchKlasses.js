import gql from 'graphql-tag';

export default gql`
  query($id: ID!) {
    studio(id: $id) {
      klasses {
        name
        startTime
        endTime
      }
    }
  }
`;
