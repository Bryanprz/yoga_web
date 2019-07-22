import gql from 'graphql-tag';

export default gql`
  mutation updateKlass($klass: KlassInput!, $teachers: [TeacherInput], $students: [StudentInput]) {
    updateKlass(klass: $klass, teachers: $teacher, students: $students)
  }
`;
