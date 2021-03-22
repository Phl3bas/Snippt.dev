import { gql } from "@apollo/client";

export default gql`
  mutation ($data: UpdateSnippetInput!){
    updateSnippet(updateSnippetData:$data){
      id
      title
      content,
      language,
      notes
    }
  }
`;