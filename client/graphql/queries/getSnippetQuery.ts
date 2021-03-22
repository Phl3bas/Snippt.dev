import { gql } from "@apollo/client";

export default gql`
  query($id: String!) {
    snippet(id: $id) {
      title
      content
      language
      notes
    }
  }
`;