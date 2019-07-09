import gql from 'graphql-tag';

export default gql`
  mutation updateKlass($klass: KlassInput!, $teacher: TeacherInput) {
    updateKlass(klass: $klass, teacher: $teacher)
  }
`;
