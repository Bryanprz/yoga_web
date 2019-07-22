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
          id
          name
        }
        students {
          id
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
