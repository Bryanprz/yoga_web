import gql from 'graphql-tag';

export default gql`
  query($id: ID!) {
    studio(id: $id) {
      klasses {
        id
        name
        description
        startTime
        endTime
        teachers {
          name
        }
        klassRoster {
          checkedIn
          student {
            id
            name
          }
        }
      }
    }
  }
`;
