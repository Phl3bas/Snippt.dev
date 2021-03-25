import { Field, ID, ObjectType } from "@nestjs/graphql"
import { SnippetType } from "src/snippet/graphql/snippet.type"


@ObjectType('User')
export class UserType {

    @Field(()=> ID)
    id: string
    
    @Field(()=> String)
    username: string
    
    @Field(()=> String)
    email: string
    
    @Field(()=> String)
    created_at: string
    
    @Field(()=> String)
    last_active_on: string
    
    // @Field(()=>[SnippetType], {nullable: true})
    // snippets: SnippetType[]
}