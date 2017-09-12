# AllApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/split-merge/0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJob**](AllApi.md#createJob) | **POST** /jobs | Create a new job
[**deleteJob**](AllApi.md#deleteJob) | **DELETE** /jobs/{jobid} | Delete a job manually
[**getJob**](AllApi.md#getJob) | **GET** /jobs/{jobid} | Get a job
[**getStream**](AllApi.md#getStream) | **GET** /jobs/{jobid}/stream | Get the current result stream
[**submitMergeJob**](AllApi.md#submitMergeJob) | **PUT** /jobs/{jobid}/merge | Start merging of a job
[**submitSplitJob**](AllApi.md#submitSplitJob) | **PUT** /jobs/{jobid}/split | Start splitting of a job
[**uploadFile**](AllApi.md#uploadFile) | **POST** /jobs/{jobid} | Upload a file for a job


<a name="createJob"></a>
# **createJob**
> Job createJob(jobSettings)

Create a new job

Create a new job for a splitting or merging operation

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
JobSettings jobSettings = new JobSettings(); // JobSettings | jobSettings
try {
    Job result = apiInstance.createJob(jobSettings);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#createJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSettings** | [**JobSettings**](JobSettings.md)| jobSettings |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteJob"></a>
# **deleteJob**
> Job deleteJob(jobid)

Delete a job manually

Delete a job manually with all its stored objects

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
try {
    Job result = apiInstance.deleteJob(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#deleteJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getJob"></a>
# **getJob**
> Job getJob(jobid)

Get a job

Get a job

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
try {
    Job result = apiInstance.getJob(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#getJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="getStream"></a>
# **getStream**
> byte[] getStream(jobid)

Get the current result stream

Get the result as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.&lt;br/&gt;This means we use a seperate path postfix with the value &#39;/stream&#39;.  This API only returns the result when the response status code is zero! In other cases nothing is returned or the Job JSON when it is still being executed

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
try {
    byte[] result = apiInstance.getStream(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#getStream");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

**byte[]**

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream, application/json;charset=UTF-8

<a name="submitMergeJob"></a>
# **submitMergeJob**
> Job submitMergeJob(jobid, settings)

Start merging of a job

Start merging of a job

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
MergeSettings settings = new MergeSettings(); // MergeSettings | settings
try {
    Job result = apiInstance.submitMergeJob(jobid, settings);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#submitMergeJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |
 **settings** | [**MergeSettings**](MergeSettings.md)| settings |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="submitSplitJob"></a>
# **submitSplitJob**
> Job submitSplitJob(jobid, settings)

Start splitting of a job

Start splitting of a job

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
SplitSettings settings = new SplitSettings(); // SplitSettings | settings
try {
    Job result = apiInstance.submitSplitJob(jobid, settings);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#submitSplitJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |
 **settings** | [**SplitSettings**](SplitSettings.md)| settings |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

<a name="uploadFile"></a>
# **uploadFile**
> Job uploadFile(jobid, stream)

Upload a file for a job

Upload a file for a split or merge job. Processing will not be started yet.

### Example
```java
// Import classes:
//import com.sphereon.sdk.splitmerge.handler.ApiClient;
//import com.sphereon.sdk.splitmerge.handler.ApiException;
//import com.sphereon.sdk.splitmerge.handler.Configuration;
//import com.sphereon.sdk.splitmerge.handler.auth.*;
//import com.sphereon.sdk.splitmerge.api.AllApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

AllApi apiInstance = new AllApi();
String jobid = "jobid_example"; // String | jobid
File stream = new File("/path/to/file.txt"); // File | The binary image to upload for a job
try {
    Job result = apiInstance.uploadFile(jobid, stream);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AllApi#uploadFile");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |
 **stream** | **File**| The binary image to upload for a job |

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

