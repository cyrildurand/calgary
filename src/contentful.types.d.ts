export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[];

  order?: SitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null;

  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null;

  path?: SitePageConnectionPathQueryString_2 | null;

  component?: SitePageConnectionComponentQueryString | null;

  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null;

  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null;

  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null;

  componentPath?: SitePageConnectionComponentPathQueryString | null;

  id?: SitePageConnectionIdQueryString_2 | null;

  internal?: SitePageConnectionInternalInputObject_2 | null;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null;

  id?: SitePageConnectionPluginCreatorIdQueryString | null;

  name?: SitePageConnectionPluginCreatorNameQueryString | null;

  version?: SitePageConnectionPluginCreatorVersionQueryString | null;

  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null;

  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null;

  parent?: SitePageConnectionPluginCreatorParentQueryString | null;

  internal?: SitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  spaceId?: SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString | null;

  accessToken?: SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString | null;

  host?: SitePageConnectionPluginCreatorPluginOptionsHostQueryString | null;

  environment?: SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString | null;

  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;

  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsHostQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null;

  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null;

  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null;

  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null;

  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null;

  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null;

  description?: SitePageConnectionInternalDescriptionQueryString | null;

  owner?: SitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[];

  order?: SitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null;

  id?: SitePluginConnectionIdQueryString_2 | null;

  name?: SitePluginConnectionNameQueryString_2 | null;

  version?: SitePluginConnectionVersionQueryString_2 | null;

  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null;

  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null;

  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null;

  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null;

  internal?: SitePluginConnectionInternalInputObject_2 | null;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  spaceId?: SitePluginConnectionPluginOptionsSpaceIdQueryString_2 | null;

  accessToken?: SitePluginConnectionPluginOptionsAccessTokenQueryString_2 | null;

  host?: SitePluginConnectionPluginOptionsHostQueryString_2 | null;

  environment?: SitePluginConnectionPluginOptionsEnvironmentQueryString_2 | null;

  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null;

  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsSpaceIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsHostQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsEnvironmentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null;

  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null;

  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null;

  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null;

  type?: SitePluginConnectionInternalTypeQueryString_2 | null;

  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionSort {
  fields: (ContentfulContentTypeConnectionSortByFieldsEnum | null)[];

  order?: ContentfulContentTypeConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterContentfulContentType {
  id?: ContentfulContentTypeConnectionIdQueryString_2 | null;

  name?: ContentfulContentTypeConnectionNameQueryString_2 | null;

  displayField?: ContentfulContentTypeConnectionDisplayFieldQueryString_2 | null;

  description?: ContentfulContentTypeConnectionDescriptionQueryString_2 | null;

  internal?: ContentfulContentTypeConnectionInternalInputObject_2 | null;
}

export interface ContentfulContentTypeConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionDisplayFieldQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionInternalInputObject_2 {
  type?: ContentfulContentTypeConnectionInternalTypeQueryString_2 | null;

  contentDigest?: ContentfulContentTypeConnectionInternalContentDigestQueryString_2 | null;

  owner?: ContentfulContentTypeConnectionInternalOwnerQueryString_2 | null;
}

export interface ContentfulContentTypeConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionSort {
  fields: (ContentfulViaFerrataConnectionSortByFieldsEnum | null)[];

  order?: ContentfulViaFerrataConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterContentfulViaFerrata {
  name?: ContentfulViaFerrataConnectionNameQueryString_2 | null;

  slug?: ContentfulViaFerrataConnectionSlugQueryString_2 | null;

  description?: ContentfulViaFerrataConnectionDescriptionInputObject_2 | null;

  location?: ContentfulViaFerrataConnectionLocationInputObject_2 | null;

  heightDifference?: ContentfulViaFerrataConnectionHeightDifferenceQueryInteger_2 | null;

  id?: ContentfulViaFerrataConnectionIdQueryString_2 | null;

  contentful_id?: ContentfulViaFerrataConnectionContentfulIdQueryString_2 | null;

  createdAt?: ContentfulViaFerrataConnectionCreatedAtQueryString_2 | null;

  updatedAt?: ContentfulViaFerrataConnectionUpdatedAtQueryString_2 | null;

  internal?: ContentfulViaFerrataConnectionInternalInputObject_2 | null;

  node_locale?: ContentfulViaFerrataConnectionNodeLocaleQueryString_2 | null;
}

export interface ContentfulViaFerrataConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionSlugQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionDescriptionInputObject_2 {
  content?: ContentfulViaFerrataConnectionDescriptionContentQueryList_2 | null;

  nodeType?: ContentfulViaFerrataConnectionDescriptionNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentQueryList_2 {
  elemMatch?: ContentfulViaFerrataConnectionDescriptionContentInputObject_2 | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentInputObject_2 {
  content?: ContentfulViaFerrataConnectionDescriptionContentContentQueryList_2 | null;

  nodeType?: ContentfulViaFerrataConnectionDescriptionContentNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentContentQueryList_2 {
  elemMatch?: ContentfulViaFerrataConnectionDescriptionContentContentInputObject_2 | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentContentInputObject_2 {
  value?: ContentfulViaFerrataConnectionDescriptionContentContentValueQueryString_2 | null;

  nodeType?: ContentfulViaFerrataConnectionDescriptionContentContentNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentContentValueQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentContentNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionDescriptionContentNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionDescriptionNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionLocationInputObject_2 {
  lon?: ContentfulViaFerrataConnectionLocationLonQueryFloat_2 | null;

  lat?: ContentfulViaFerrataConnectionLocationLatQueryFloat_2 | null;
}

export interface ContentfulViaFerrataConnectionLocationLonQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataConnectionLocationLatQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataConnectionHeightDifferenceQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionContentfulIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionCreatedAtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionUpdatedAtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionInternalInputObject_2 {
  type?: ContentfulViaFerrataConnectionInternalTypeQueryString_2 | null;

  contentDigest?: ContentfulViaFerrataConnectionInternalContentDigestQueryString_2 | null;

  owner?: ContentfulViaFerrataConnectionInternalOwnerQueryString_2 | null;
}

export interface ContentfulViaFerrataConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataConnectionNodeLocaleQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null;

  id?: SitePagePluginCreatorIdQueryString | null;

  name?: SitePagePluginCreatorNameQueryString | null;

  version?: SitePagePluginCreatorVersionQueryString | null;

  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null;

  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null;

  parent?: SitePagePluginCreatorParentQueryString | null;

  internal?: SitePagePluginCreatorInternalInputObject | null;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  spaceId?: SitePagePluginCreatorPluginOptionsSpaceIdQueryString | null;

  accessToken?: SitePagePluginCreatorPluginOptionsAccessTokenQueryString | null;

  host?: SitePagePluginCreatorPluginOptionsHostQueryString | null;

  environment?: SitePagePluginCreatorPluginOptionsEnvironmentQueryString | null;

  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null;

  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsSpaceIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsHostQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsEnvironmentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null;

  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePagePluginCreatorPackageJsonMainQueryString | null;

  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null;

  type?: SitePagePluginCreatorInternalTypeQueryString | null;

  owner?: SitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null;

  contentDigest?: SitePageInternalContentDigestQueryString_2 | null;

  description?: SitePageInternalDescriptionQueryString | null;

  owner?: SitePageInternalOwnerQueryString_2 | null;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsInputObject_2 {
  spaceId?: SitePluginPluginOptionsSpaceIdQueryString_2 | null;

  accessToken?: SitePluginPluginOptionsAccessTokenQueryString_2 | null;

  host?: SitePluginPluginOptionsHostQueryString_2 | null;

  environment?: SitePluginPluginOptionsEnvironmentQueryString_2 | null;

  path?: SitePluginPluginOptionsPathQueryString_2 | null;

  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsSpaceIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsAccessTokenQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsHostQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsEnvironmentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null;

  description?: SitePluginPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginPackageJsonVersionQueryString_2 | null;

  main?: SitePluginPackageJsonMainQueryString_2 | null;

  license?: SitePluginPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null;

  type?: SitePluginInternalTypeQueryString_2 | null;

  owner?: SitePluginInternalOwnerQueryString_2 | null;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePortQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteHostQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null;

  type?: SiteInternalTypeQueryString_2 | null;

  owner?: SiteInternalOwnerQueryString_2 | null;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeDisplayFieldQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeInternalInputObject_2 {
  type?: ContentfulContentTypeInternalTypeQueryString_2 | null;

  contentDigest?: ContentfulContentTypeInternalContentDigestQueryString_2 | null;

  owner?: ContentfulContentTypeInternalOwnerQueryString_2 | null;
}

export interface ContentfulContentTypeInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulContentTypeInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataSlugQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataDescriptionInputObject_2 {
  content?: ContentfulViaFerrataDescriptionContentQueryList_2 | null;

  nodeType?: ContentfulViaFerrataDescriptionNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataDescriptionContentQueryList_2 {
  elemMatch?: ContentfulViaFerrataDescriptionContentInputObject_2 | null;
}

export interface ContentfulViaFerrataDescriptionContentInputObject_2 {
  content?: ContentfulViaFerrataDescriptionContentContentQueryList_2 | null;

  nodeType?: ContentfulViaFerrataDescriptionContentNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataDescriptionContentContentQueryList_2 {
  elemMatch?: ContentfulViaFerrataDescriptionContentContentInputObject_2 | null;
}

export interface ContentfulViaFerrataDescriptionContentContentInputObject_2 {
  value?: ContentfulViaFerrataDescriptionContentContentValueQueryString_2 | null;

  nodeType?: ContentfulViaFerrataDescriptionContentContentNodeTypeQueryString_2 | null;
}

export interface ContentfulViaFerrataDescriptionContentContentValueQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataDescriptionContentContentNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataDescriptionContentNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataDescriptionNodeTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataLocationInputObject_2 {
  lon?: ContentfulViaFerrataLocationLonQueryFloat_2 | null;

  lat?: ContentfulViaFerrataLocationLatQueryFloat_2 | null;
}

export interface ContentfulViaFerrataLocationLonQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataLocationLatQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataHeightDifferenceQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface ContentfulViaFerrataIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataContentfulIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataCreatedAtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataUpdatedAtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataInternalInputObject_2 {
  type?: ContentfulViaFerrataInternalTypeQueryString_2 | null;

  contentDigest?: ContentfulViaFerrataInternalContentDigestQueryString_2 | null;

  owner?: ContentfulViaFerrataInternalOwnerQueryString_2 | null;
}

export interface ContentfulViaFerrataInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ContentfulViaFerrataNodeLocaleQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum SitePageDistinctEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePageGroupEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___spaceId = "pluginOptions___spaceId",
  pluginOptions___accessToken = "pluginOptions___accessToken",
  pluginOptions___host = "pluginOptions___host",
  pluginOptions___environment = "pluginOptions___environment",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum SitePluginDistinctEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___spaceId = "pluginOptions___spaceId",
  pluginOptions___accessToken = "pluginOptions___accessToken",
  pluginOptions___host = "pluginOptions___host",
  pluginOptions___environment = "pluginOptions___environment",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum SitePluginGroupEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___spaceId = "pluginOptions___spaceId",
  pluginOptions___accessToken = "pluginOptions___accessToken",
  pluginOptions___host = "pluginOptions___host",
  pluginOptions___environment = "pluginOptions___environment",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum ContentfulContentTypeConnectionSortByFieldsEnum {
  id = "id",
  name = "name",
  displayField = "displayField",
  description = "description",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ContentfulContentTypeConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum ContentfulContentTypeDistinctEnum {
  id = "id",
  name = "name",
  displayField = "displayField",
  description = "description",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ContentfulContentTypeGroupEnum {
  id = "id",
  name = "name",
  displayField = "displayField",
  description = "description",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum ContentfulViaFerrataConnectionSortByFieldsEnum {
  name = "name",
  slug = "slug",
  description___content = "description___content",
  description___nodeType = "description___nodeType",
  location___lon = "location___lon",
  location___lat = "location___lat",
  heightDifference = "heightDifference",
  id = "id",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  node_locale = "node_locale"
}

export enum ContentfulViaFerrataConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum ContentfulViaFerrataDistinctEnum {
  name = "name",
  slug = "slug",
  description___content = "description___content",
  description___nodeType = "description___nodeType",
  location___lon = "location___lon",
  location___lat = "location___lat",
  heightDifference = "heightDifference",
  id = "id",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  node_locale = "node_locale"
}

export enum ContentfulViaFerrataGroupEnum {
  name = "name",
  slug = "slug",
  description___content = "description___content",
  description___nodeType = "description___nodeType",
  location___lon = "location___lon",
  location___lat = "location___lat",
  heightDifference = "heightDifference",
  id = "id",
  contentful_id = "contentful_id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  node_locale = "node_locale"
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: SitePageConnection | null;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: SitePluginConnection | null;
  /** Connection to all ContentfulContentType nodes */
  allContentfulContentType?: ContentfulContentTypeConnection | null;
  /** Connection to all ContentfulViaFerrata nodes */
  allContentfulViaFerrata?: ContentfulViaFerrataConnection | null;

  sitePage?: SitePage | null;

  sitePlugin?: SitePlugin | null;

  site?: Site | null;

  contentfulContentType?: ContentfulContentType | null;

  contentfulViaFerrata?: ContentfulViaFerrata | null;
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (SitePageEdge | null)[] | null;

  totalCount?: number | null;

  distinct?: (string | null)[] | null;

  group?: (SitePageGroupConnectionConnection | null)[] | null;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean;
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: SitePage | null;
  /** The next edge in the connection */
  next?: SitePage | null;
  /** The previous edge in the connection */
  previous?: SitePage | null;
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;

  jsonName?: string | null;

  internalComponentName?: string | null;

  path?: string | null;

  component?: string | null;

  componentChunkName?: string | null;

  pluginCreator?: SitePlugin | null;

  pluginCreatorId?: string | null;

  componentPath?: string | null;

  internal?: Internal_6 | null;
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;

  resolve?: string | null;

  name?: string | null;

  version?: string | null;

  pluginOptions?: PluginOptions_2 | null;

  nodeAPIs?: (string | null)[] | null;

  pluginFilepath?: string | null;

  packageJson?: PackageJson_2 | null;

  internal?: Internal_7 | null;
}

export interface PluginOptions_2 {
  spaceId?: string | null;

  accessToken?: string | null;

  host?: string | null;

  environment?: string | null;

  path?: string | null;

  pathCheck?: boolean | null;
}

export interface PackageJson_2 {
  name?: string | null;

  description?: string | null;

  version?: string | null;

  main?: string | null;

  license?: string | null;

  dependencies?: (Dependencies_2 | null)[] | null;

  devDependencies?: (DevDependencies_2 | null)[] | null;

  peerDependencies?: (PeerDependencies_2 | null)[] | null;

  keywords?: (string | null)[] | null;
}

export interface Dependencies_2 {
  name?: string | null;

  version?: string | null;
}

export interface DevDependencies_2 {
  name?: string | null;

  version?: string | null;
}

export interface PeerDependencies_2 {
  name?: string | null;

  version?: string | null;
}

export interface Internal_7 {
  contentDigest?: string | null;

  type?: string | null;

  owner?: string | null;
}

export interface Internal_6 {
  type?: string | null;

  contentDigest?: string | null;

  description?: string | null;

  owner?: string | null;
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (SitePageGroupConnectionEdge | null)[] | null;

  field?: string | null;

  fieldValue?: string | null;

  totalCount?: number | null;
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: SitePage | null;
  /** The next edge in the connection */
  next?: SitePage | null;
  /** The previous edge in the connection */
  previous?: SitePage | null;
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (SitePluginEdge | null)[] | null;

  totalCount?: number | null;

  distinct?: (string | null)[] | null;

  group?: (SitePluginGroupConnectionConnection | null)[] | null;
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: SitePlugin | null;
  /** The next edge in the connection */
  next?: SitePlugin | null;
  /** The previous edge in the connection */
  previous?: SitePlugin | null;
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (SitePluginGroupConnectionEdge | null)[] | null;

  field?: string | null;

  fieldValue?: string | null;

  totalCount?: number | null;
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: SitePlugin | null;
  /** The next edge in the connection */
  next?: SitePlugin | null;
  /** The previous edge in the connection */
  previous?: SitePlugin | null;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (ContentfulContentTypeEdge | null)[] | null;

  totalCount?: number | null;

  distinct?: (string | null)[] | null;

  group?: (ContentfulContentTypeGroupConnectionConnection | null)[] | null;
}

/** An edge in a connection. */
export interface ContentfulContentTypeEdge {
  /** The item at the end of the edge */
  node?: ContentfulContentType | null;
  /** The next edge in the connection */
  next?: ContentfulContentType | null;
  /** The previous edge in the connection */
  previous?: ContentfulContentType | null;
}

/** Node of type ContentfulContentType */
export interface ContentfulContentType extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;

  name?: string | null;

  displayField?: string | null;

  description?: string | null;

  internal?: Internal_8 | null;
}

export interface Internal_8 {
  type?: string | null;

  contentDigest?: string | null;

  owner?: string | null;
}

/** A connection to a list of items. */
export interface ContentfulContentTypeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (ContentfulContentTypeGroupConnectionEdge | null)[] | null;

  field?: string | null;

  fieldValue?: string | null;

  totalCount?: number | null;
}

/** An edge in a connection. */
export interface ContentfulContentTypeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: ContentfulContentType | null;
  /** The next edge in the connection */
  next?: ContentfulContentType | null;
  /** The previous edge in the connection */
  previous?: ContentfulContentType | null;
}

/** A connection to a list of items. */
export interface ContentfulViaFerrataConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (ContentfulViaFerrataEdge | null)[] | null;

  totalCount?: number | null;

  distinct?: (string | null)[] | null;

  group?: (ContentfulViaFerrataGroupConnectionConnection | null)[] | null;
}

/** An edge in a connection. */
export interface ContentfulViaFerrataEdge {
  /** The item at the end of the edge */
  node?: ContentfulViaFerrata | null;
  /** The next edge in the connection */
  next?: ContentfulViaFerrata | null;
  /** The previous edge in the connection */
  previous?: ContentfulViaFerrata | null;
}

/** Node of type ContentfulViaFerrata */
export interface ContentfulViaFerrata extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;

  name?: string | null;

  slug?: string | null;

  description?: Description_2 | null;

  location?: Location_2 | null;

  heightDifference?: number | null;

  contentful_id?: string | null;

  createdAt?: Date | null;

  updatedAt?: Date | null;

  internal?: Internal_9 | null;

  node_locale?: string | null;
}

export interface Description_2 {
  content?: (Content_3 | null)[] | null;

  nodeType?: string | null;
}

export interface Content_3 {
  content?: (Content_4 | null)[] | null;

  nodeType?: string | null;
}

export interface Content_4 {
  value?: string | null;

  nodeType?: string | null;
}

export interface Location_2 {
  lon?: number | null;

  lat?: number | null;
}

export interface Internal_9 {
  type?: string | null;

  contentDigest?: string | null;

  owner?: string | null;
}

/** A connection to a list of items. */
export interface ContentfulViaFerrataGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: (ContentfulViaFerrataGroupConnectionEdge | null)[] | null;

  field?: string | null;

  fieldValue?: string | null;

  totalCount?: number | null;
}

/** An edge in a connection. */
export interface ContentfulViaFerrataGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: ContentfulViaFerrata | null;
  /** The next edge in the connection */
  next?: ContentfulViaFerrata | null;
  /** The previous edge in the connection */
  previous?: ContentfulViaFerrata | null;
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string;
  /** The parent of this node. */
  parent?: Node | null;
  /** The children of this node. */
  children?: (Node | null)[] | null;

  port?: Date | null;

  host?: string | null;

  pathPrefix?: string | null;

  polyfill?: boolean | null;

  buildTime?: Date | null;

  internal?: Internal_10 | null;
}

export interface Internal_10 {
  contentDigest?: string | null;

  type?: string | null;

  owner?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: number | null;

  limit?: number | null;

  sort?: SitePageConnectionSort | null;

  filter?: FilterSitePage | null;
}
export interface AllSitePluginQueryArgs {
  skip?: number | null;

  limit?: number | null;

  sort?: SitePluginConnectionSort | null;

  filter?: FilterSitePlugin | null;
}
export interface AllContentfulContentTypeQueryArgs {
  skip?: number | null;

  limit?: number | null;

  sort?: ContentfulContentTypeConnectionSort | null;

  filter?: FilterContentfulContentType | null;
}
export interface AllContentfulViaFerrataQueryArgs {
  skip?: number | null;

  limit?: number | null;

  sort?: ContentfulViaFerrataConnectionSort | null;

  filter?: FilterContentfulViaFerrata | null;
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null;

  internalComponentName?: SitePageInternalComponentNameQueryString | null;

  path?: SitePagePathQueryString_2 | null;

  component?: SitePageComponentQueryString | null;

  componentChunkName?: SitePageComponentChunkNameQueryString | null;

  pluginCreator?: SitePagePluginCreatorInputObject | null;

  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null;

  componentPath?: SitePageComponentPathQueryString | null;

  id?: SitePageIdQueryString_2 | null;

  internal?: SitePageInternalInputObject_2 | null;
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null;

  id?: SitePluginIdQueryString_2 | null;

  name?: SitePluginNameQueryString_2 | null;

  version?: SitePluginVersionQueryString_2 | null;

  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null;

  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null;

  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null;

  packageJson?: SitePluginPackageJsonInputObject_2 | null;

  internal?: SitePluginInternalInputObject_2 | null;
}
export interface SiteQueryArgs {
  port?: SitePortQueryString_2 | null;

  host?: SiteHostQueryString_2 | null;

  pathPrefix?: SitePathPrefixQueryString_2 | null;

  polyfill?: SitePolyfillQueryBoolean_2 | null;

  buildTime?: SiteBuildTimeQueryString_2 | null;

  id?: SiteIdQueryString_2 | null;

  internal?: SiteInternalInputObject_2 | null;
}
export interface ContentfulContentTypeQueryArgs {
  id?: ContentfulContentTypeIdQueryString_2 | null;

  name?: ContentfulContentTypeNameQueryString_2 | null;

  displayField?: ContentfulContentTypeDisplayFieldQueryString_2 | null;

  description?: ContentfulContentTypeDescriptionQueryString_2 | null;

  internal?: ContentfulContentTypeInternalInputObject_2 | null;
}
export interface ContentfulViaFerrataQueryArgs {
  name?: ContentfulViaFerrataNameQueryString_2 | null;

  slug?: ContentfulViaFerrataSlugQueryString_2 | null;

  description?: ContentfulViaFerrataDescriptionInputObject_2 | null;

  location?: ContentfulViaFerrataLocationInputObject_2 | null;

  heightDifference?: ContentfulViaFerrataHeightDifferenceQueryInteger_2 | null;

  id?: ContentfulViaFerrataIdQueryString_2 | null;

  contentful_id?: ContentfulViaFerrataContentfulIdQueryString_2 | null;

  createdAt?: ContentfulViaFerrataCreatedAtQueryString_2 | null;

  updatedAt?: ContentfulViaFerrataUpdatedAtQueryString_2 | null;

  internal?: ContentfulViaFerrataInternalInputObject_2 | null;

  node_locale?: ContentfulViaFerrataNodeLocaleQueryString_2 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;

  limit?: number | null;

  field?: SitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;

  limit?: number | null;

  field?: SitePluginGroupEnum | null;
}
export interface DistinctContentfulContentTypeConnectionArgs {
  field?: ContentfulContentTypeDistinctEnum | null;
}
export interface GroupContentfulContentTypeConnectionArgs {
  skip?: number | null;

  limit?: number | null;

  field?: ContentfulContentTypeGroupEnum | null;
}
export interface DistinctContentfulViaFerrataConnectionArgs {
  field?: ContentfulViaFerrataDistinctEnum | null;
}
export interface GroupContentfulViaFerrataConnectionArgs {
  skip?: number | null;

  limit?: number | null;

  field?: ContentfulViaFerrataGroupEnum | null;
}
export interface CreatedAtContentfulViaFerrataArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null;
}
export interface UpdatedAtContentfulViaFerrataArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null;
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null;
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: string | null;
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: boolean | null;
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: string | null;
  /** Configures the locale Moment.js will use to format the date. */
  locale?: string | null;
}
