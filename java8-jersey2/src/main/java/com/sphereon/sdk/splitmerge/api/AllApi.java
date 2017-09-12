package com.sphereon.sdk.splitmerge.api;

import com.sphereon.sdk.splitmerge.handler.ApiException;
import com.sphereon.sdk.splitmerge.handler.ApiClient;
import com.sphereon.sdk.splitmerge.handler.Configuration;
import com.sphereon.sdk.splitmerge.handler.Pair;

import javax.ws.rs.core.GenericType;

import com.sphereon.sdk.splitmerge.model.JobSettings;
import com.sphereon.sdk.splitmerge.model.Job;
import com.sphereon.sdk.splitmerge.model.ErrorResponse;
import com.sphereon.sdk.splitmerge.model.MergeSettings;
import com.sphereon.sdk.splitmerge.model.SplitSettings;
import java.io.File;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2017-09-12T12:46:53.940+02:00")
public class AllApi {
  private ApiClient apiClient;

  public AllApi() {
    this(Configuration.getDefaultApiClient());
  }

  public AllApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Create a new job
   * Create a new job for a splitting or merging operation
   * @param jobSettings jobSettings (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job createJob(JobSettings jobSettings) throws ApiException {
    Object localVarPostBody = jobSettings;
    
    // verify the required parameter 'jobSettings' is set
    if (jobSettings == null) {
      throw new ApiException(400, "Missing the required parameter 'jobSettings' when calling createJob");
    }
    
    // create path and map variables
    String localVarPath = "/jobs".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json;charset=UTF-8"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Delete a job manually
   * Delete a job manually with all its stored objects
   * @param jobid jobid (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job deleteJob(String jobid) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling deleteJob");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "DELETE", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get a job
   * Get a job
   * @param jobid jobid (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job getJob(String jobid) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling getJob");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get the current result stream
   * Get the result as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.&lt;br/&gt;This means we use a seperate path postfix with the value &#39;/stream&#39;.  This API only returns the result when the response status code is zero! In other cases nothing is returned or the Job JSON when it is still being executed
   * @param jobid jobid (required)
   * @return byte[]
   * @throws ApiException if fails to make API call
   */
  public byte[] getStream(String jobid) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling getStream");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}/stream".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/octet-stream", "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<byte[]> localVarReturnType = new GenericType<byte[]>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Start merging of a job
   * Start merging of a job
   * @param jobid jobid (required)
   * @param settings settings (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job submitMergeJob(String jobid, MergeSettings settings) throws ApiException {
    Object localVarPostBody = settings;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling submitMergeJob");
    }
    
    // verify the required parameter 'settings' is set
    if (settings == null) {
      throw new ApiException(400, "Missing the required parameter 'settings' when calling submitMergeJob");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}/merge".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Start splitting of a job
   * Start splitting of a job
   * @param jobid jobid (required)
   * @param settings settings (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job submitSplitJob(String jobid, SplitSettings settings) throws ApiException {
    Object localVarPostBody = settings;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling submitSplitJob");
    }
    
    // verify the required parameter 'settings' is set
    if (settings == null) {
      throw new ApiException(400, "Missing the required parameter 'settings' when calling submitSplitJob");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}/split".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Upload a file for a job
   * Upload a file for a split or merge job. Processing will not be started yet.
   * @param jobid jobid (required)
   * @param stream The binary image to upload for a job (required)
   * @return Job
   * @throws ApiException if fails to make API call
   */
  public Job uploadFile(String jobid, File stream) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'jobid' is set
    if (jobid == null) {
      throw new ApiException(400, "Missing the required parameter 'jobid' when calling uploadFile");
    }
    
    // verify the required parameter 'stream' is set
    if (stream == null) {
      throw new ApiException(400, "Missing the required parameter 'stream' when calling uploadFile");
    }
    
    // create path and map variables
    String localVarPath = "/jobs/{jobid}".replaceAll("\\{format\\}","json")
      .replaceAll("\\{" + "jobid" + "\\}", apiClient.escapeString(jobid.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    if (stream != null)
      localVarFormParams.put("stream", stream);

    final String[] localVarAccepts = {
      "application/json;charset=UTF-8"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "multipart/form-data"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "oauth2schema" };

    GenericType<Job> localVarReturnType = new GenericType<Job>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
}
