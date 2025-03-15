/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPublicData = /* GraphQL */ `mutation CreatePublicData(
  $input: CreatePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  createPublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePublicDataMutationVariables,
  APITypes.CreatePublicDataMutation
>;
export const updatePublicData = /* GraphQL */ `mutation UpdatePublicData(
  $input: UpdatePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  updatePublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePublicDataMutationVariables,
  APITypes.UpdatePublicDataMutation
>;
export const deletePublicData = /* GraphQL */ `mutation DeletePublicData(
  $input: DeletePublicDataInput!
  $condition: ModelPublicDataConditionInput
) {
  deletePublicData(input: $input, condition: $condition) {
    id
    title
    description
    image
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePublicDataMutationVariables,
  APITypes.DeletePublicDataMutation
>;
