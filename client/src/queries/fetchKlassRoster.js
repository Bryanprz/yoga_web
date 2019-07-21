import gql from 'graphql-tag';

export default gql`
query klassRoster($klassId: ID!, $studentId: ID) {
  klassRoster(klassId: $klassId, studentId: $studentId) {
    student {
      id
      name
    }
    checkedIn
  }
}
`;
