/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPublicData = /* GraphQL */ `query GetPublicData($id: ID!) {
  getPublicData(id: $id) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPublicDataQueryVariables,
  APITypes.GetPublicDataQuery
>;
export const listPublicData = /* GraphQL */ `query ListPublicData(
  $filter: ModelPublicDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listPublicData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      image
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPublicDataQueryVariables,
  APITypes.ListPublicDataQuery
>;
