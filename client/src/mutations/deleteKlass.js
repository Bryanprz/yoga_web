import gql from 'graphql-tag';

export default gql`
  mutation deleteKlass($id: String!) {
    deleteKlass(id: $id)
  }
`;

