import { request } from "graphql-request";
import { RequestDocument, Variables } from "graphql-request/dist/types";
import { GRAPHQL_URI } from "../constants";

export const useNestServer = async <T>(
  query: RequestDocument,
  variables?: Variables
): Promise<T> => {
  try {
    return await request(GRAPHQL_URI, query, variables);
  } catch (err) {
    return err;
  }
};
