import {gql} from '@apollo/client'

export default gql`
mutation($data: CreateSnippetInput!) {
  createSnippet(createSnippetData: $data) {
    title
    language
    content
    notes
  }
}
`;