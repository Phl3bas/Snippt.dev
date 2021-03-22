import {gql} from '@apollo/client'

export default gql`
    query {
        allSnippets {
        title
        language
        id
        }
    }
`