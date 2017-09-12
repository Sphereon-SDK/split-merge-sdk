# Sphereon.SDK.SplitMerge.Api.AllApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/split-merge/0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateJob**](AllApi.md#createjob) | **POST** /jobs | Create a new job
[**DeleteJob**](AllApi.md#deletejob) | **DELETE** /jobs/{jobid} | Delete a job manually
[**GetJob**](AllApi.md#getjob) | **GET** /jobs/{jobid} | Get a job
[**GetStream**](AllApi.md#getstream) | **GET** /jobs/{jobid}/stream | Get the current result stream
[**SubmitMergeJob**](AllApi.md#submitmergejob) | **PUT** /jobs/{jobid}/merge | Start merging of a job
[**SubmitSplitJob**](AllApi.md#submitsplitjob) | **PUT** /jobs/{jobid}/split | Start splitting of a job
[**UploadFile**](AllApi.md#uploadfile) | **POST** /jobs/{jobid} | Upload a file for a job


<a name="createjob"></a>
# **CreateJob**
> Job CreateJob (JobSettings jobSettings)

Create a new job

Create a new job for a splitting or merging operation

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class CreateJobExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobSettings = new JobSettings(); // JobSettings | jobSettings

            try
            {
                // Create a new job
                Job result = apiInstance.CreateJob(jobSettings);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.CreateJob: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="deletejob"></a>
# **DeleteJob**
> Job DeleteJob (string jobid)

Delete a job manually

Delete a job manually with all its stored objects

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class DeleteJobExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid

            try
            {
                // Delete a job manually
                Job result = apiInstance.DeleteJob(jobid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.DeleteJob: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getjob"></a>
# **GetJob**
> Job GetJob (string jobid)

Get a job

Get a job

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class GetJobExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid

            try
            {
                // Get a job
                Job result = apiInstance.GetJob(jobid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.GetJob: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getstream"></a>
# **GetStream**
> byte[] GetStream (string jobid)

Get the current result stream

Get the result as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.<br/>This means we use a seperate path postfix with the value '/stream'.  This API only returns the result when the response status code is zero! In other cases nothing is returned or the Job JSON when it is still being executed

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class GetStreamExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid

            try
            {
                // Get the current result stream
                byte[] result = apiInstance.GetStream(jobid);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.GetStream: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 

### Return type

**byte[]**

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream, application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="submitmergejob"></a>
# **SubmitMergeJob**
> Job SubmitMergeJob (string jobid, MergeSettings settings)

Start merging of a job

Start merging of a job

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class SubmitMergeJobExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid
            var settings = new MergeSettings(); // MergeSettings | settings

            try
            {
                // Start merging of a job
                Job result = apiInstance.SubmitMergeJob(jobid, settings);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.SubmitMergeJob: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 
 **settings** | [**MergeSettings**](MergeSettings.md)| settings | 

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="submitsplitjob"></a>
# **SubmitSplitJob**
> Job SubmitSplitJob (string jobid, SplitSettings settings)

Start splitting of a job

Start splitting of a job

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class SubmitSplitJobExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid
            var settings = new SplitSettings(); // SplitSettings | settings

            try
            {
                // Start splitting of a job
                Job result = apiInstance.SubmitSplitJob(jobid, settings);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.SubmitSplitJob: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 
 **settings** | [**SplitSettings**](SplitSettings.md)| settings | 

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="uploadfile"></a>
# **UploadFile**
> Job UploadFile (string jobid, System.IO.Stream stream)

Upload a file for a job

Upload a file for a split or merge job. Processing will not be started yet.

### Example
```csharp
using System;
using System.Diagnostics;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Client;
using Sphereon.SDK.SplitMerge.Model;

namespace Example
{
    public class UploadFileExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: oauth2schema
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AllApi();
            var jobid = jobid_example;  // string | jobid
            var stream = new System.IO.Stream(); // System.IO.Stream | The binary image to upload for a job

            try
            {
                // Upload a file for a job
                Job result = apiInstance.UploadFile(jobid, stream);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AllApi.UploadFile: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **string**| jobid | 
 **stream** | **System.IO.Stream**| The binary image to upload for a job | 

### Return type

[**Job**](Job.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

