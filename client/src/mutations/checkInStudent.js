import gql from 'graphql-tag';

export default gql`
  mutation checkInStudent($studentId: ID, $klassId: ID!) {
    checkInStudent(studentId: $studentId, klassId: $klassId)
  }
`;

