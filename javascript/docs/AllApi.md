# SplitMerger.AllApi

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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobSettings = new SplitMerger.JobSettings(); // JobSettings | jobSettings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createJob(jobSettings, callback);
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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteJob(jobid, callback);
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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJob(jobid, callback);
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
> &#39;String&#39; getStream(jobid)

Get the current result stream

Get the result as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.&lt;br/&gt;This means we use a seperate path postfix with the value &#39;/stream&#39;.  This API only returns the result when the response status code is zero! In other cases nothing is returned or the Job JSON when it is still being executed

### Example
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStream(jobid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid | 

### Return type

**&#39;String&#39;**

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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid

var settings = new SplitMerger.MergeSettings(); // MergeSettings | settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitMergeJob(jobid, settings, callback);
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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid

var settings = new SplitMerger.SplitSettings(); // SplitSettings | settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitSplitJob(jobid, settings, callback);
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
```javascript
var SplitMerger = require('split_merger');
var defaultClient = SplitMerger.ApiClient.default;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SplitMerger.AllApi();

var jobid = "jobid_example"; // String | jobid

var stream = "/path/to/file.txt"; // File | The binary image to upload for a job


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadFile(jobid, stream, callback);
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

