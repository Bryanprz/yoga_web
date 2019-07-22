import gql from 'graphql-tag';

export default gql`
  mutation createKlass($klass: KlassInput!, $teachers:[TeacherInput!], $students: [StudentInput!]) {
    createKlass(klass: $klass, teachers: $teachers, students: $students) {
      name
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
    }
  }
`;
