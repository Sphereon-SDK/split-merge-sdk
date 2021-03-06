/**
 * Split Merger
 * The Split and Merge API allows you to split and merge files. For now you always have to define the filetype for the split or merge result. Supported types are Tiff, PDF or MS word files. In the future new types as well as type inferring will be implemented. Please note that this API will change in the way the merge or split is initiated from v0.1 to v0.2 which is scheduled later in 2017.
 *
 * OpenAPI spec version: 0.1
 * Contact: dev@sphereon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['SphereonSDKSplitMerge/ApiClient', 'SphereonSDKSplitMerge/model/JobSettings', 'SphereonSDKSplitMerge/model/Job', 'SphereonSDKSplitMerge/model/ErrorResponse', 'SphereonSDKSplitMerge/model/MergeSettings', 'SphereonSDKSplitMerge/model/SplitSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobSettings'), require('../model/Job'), require('../model/ErrorResponse'), require('../model/MergeSettings'), require('../model/SplitSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SplitMerger) {
      root.SplitMerger = {};
    }
    root.SplitMerger.AllApi = factory(root.SplitMerger.ApiClient, root.SplitMerger.JobSettings, root.SplitMerger.Job, root.SplitMerger.ErrorResponse, root.SplitMerger.MergeSettings, root.SplitMerger.SplitSettings);
  }
}(this, function(ApiClient, JobSettings, Job, ErrorResponse, MergeSettings, SplitSettings) {
  'use strict';

  /**
   * All service.
   * @module SphereonSDKSplitMerge/api/AllApi
   * @version 0.1
   */

  /**
   * Constructs a new AllApi. 
   * @alias module:SphereonSDKSplitMerge/api/AllApi
   * @class
   * @param {module:SphereonSDKSplitMerge/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:SphereonSDKSplitMerge/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createJob operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~createJobCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new job
     * Create a new job for a splitting or merging operation
     * @param {module:SphereonSDKSplitMerge/model/JobSettings} jobSettings jobSettings
     * @param {module:SphereonSDKSplitMerge/api/AllApi~createJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.createJob = function(jobSettings, callback) {
      var postBody = jobSettings;

      // verify the required parameter 'jobSettings' is set
      if (jobSettings == undefined || jobSettings == null) {
        throw "Missing the required parameter 'jobSettings' when calling createJob";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteJob operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~deleteJobCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a job manually
     * Delete a job manually with all its stored objects
     * @param {String} jobid jobid
     * @param {module:SphereonSDKSplitMerge/api/AllApi~deleteJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.deleteJob = function(jobid, callback) {
      var postBody = null;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling deleteJob";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs/{jobid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJob operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~getJobCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a job
     * Get a job
     * @param {String} jobid jobid
     * @param {module:SphereonSDKSplitMerge/api/AllApi~getJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.getJob = function(jobid, callback) {
      var postBody = null;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling getJob";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs/{jobid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStream operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~getStreamCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current result stream
     * Get the result as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.&lt;br/&gt;This means we use a seperate path postfix with the value &#39;/stream&#39;.  This API only returns the result when the response status code is zero! In other cases nothing is returned or the Job JSON when it is still being executed
     * @param {String} jobid jobid
     * @param {module:SphereonSDKSplitMerge/api/AllApi~getStreamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getStream = function(jobid, callback) {
      var postBody = null;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling getStream";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream', 'application/json;charset=UTF-8'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/jobs/{jobid}/stream', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the submitMergeJob operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~submitMergeJobCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start merging of a job
     * Start merging of a job
     * @param {String} jobid jobid
     * @param {module:SphereonSDKSplitMerge/model/MergeSettings} settings settings
     * @param {module:SphereonSDKSplitMerge/api/AllApi~submitMergeJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.submitMergeJob = function(jobid, settings, callback) {
      var postBody = settings;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling submitMergeJob";
      }

      // verify the required parameter 'settings' is set
      if (settings == undefined || settings == null) {
        throw "Missing the required parameter 'settings' when calling submitMergeJob";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs/{jobid}/merge', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the submitSplitJob operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~submitSplitJobCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start splitting of a job
     * Start splitting of a job
     * @param {String} jobid jobid
     * @param {module:SphereonSDKSplitMerge/model/SplitSettings} settings settings
     * @param {module:SphereonSDKSplitMerge/api/AllApi~submitSplitJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.submitSplitJob = function(jobid, settings, callback) {
      var postBody = settings;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling submitSplitJob";
      }

      // verify the required parameter 'settings' is set
      if (settings == undefined || settings == null) {
        throw "Missing the required parameter 'settings' when calling submitSplitJob";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs/{jobid}/split', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback module:SphereonSDKSplitMerge/api/AllApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKSplitMerge/model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file for a job
     * Upload a file for a split or merge job. Processing will not be started yet.
     * @param {String} jobid jobid
     * @param {File} stream The binary image to upload for a job
     * @param {module:SphereonSDKSplitMerge/api/AllApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKSplitMerge/model/Job}
     */
    this.uploadFile = function(jobid, stream, callback) {
      var postBody = null;

      // verify the required parameter 'jobid' is set
      if (jobid == undefined || jobid == null) {
        throw "Missing the required parameter 'jobid' when calling uploadFile";
      }

      // verify the required parameter 'stream' is set
      if (stream == undefined || stream == null) {
        throw "Missing the required parameter 'stream' when calling uploadFile";
      }


      var pathParams = {
        'jobid': jobid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'stream': stream
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Job;

      return this.apiClient.callApi(
        '/jobs/{jobid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
