import gql from 'graphql-tag';

export default gql`
  mutation createKlass($klass: KlassInput!, $teacher:TeacherInput) {
    createKlass(klass: $klass, teacher: $teacher) {
      name
      id
      startTime
      endTime
    }
  }
`;
