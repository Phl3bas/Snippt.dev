import { gql } from "@apollo/client";

export default gql`
mutation($data: DeleteSnippetInput!) {
  deleteSnippet(deleteSnippetData: $data) {
    id
  }
}
`;