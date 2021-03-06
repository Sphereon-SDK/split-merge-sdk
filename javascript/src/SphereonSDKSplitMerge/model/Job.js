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
    define(['SphereonSDKSplitMerge/ApiClient', 'SphereonSDKSplitMerge/model/ActionSettings', 'SphereonSDKSplitMerge/model/FileEntry', 'SphereonSDKSplitMerge/model/JobSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionSettings'), require('./FileEntry'), require('./JobSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.SplitMerger) {
      root.SplitMerger = {};
    }
    root.SplitMerger.Job = factory(root.SplitMerger.ApiClient, root.SplitMerger.ActionSettings, root.SplitMerger.FileEntry, root.SplitMerger.JobSettings);
  }
}(this, function(ApiClient, ActionSettings, FileEntry, JobSettings) {
  'use strict';




  /**
   * The Job model module.
   * @module SphereonSDKSplitMerge/model/Job
   * @version 0.1
   */

  /**
   * Constructs a new <code>Job</code>.
   * @alias module:SphereonSDKSplitMerge/model/Job
   * @class
   * @param actionSettings {module:SphereonSDKSplitMerge/model/ActionSettings} 
   * @param jobSettings {module:SphereonSDKSplitMerge/model/JobSettings} 
   * @param state {module:SphereonSDKSplitMerge/model/Job.StateEnum} The status of the job
   */
  var exports = function(actionSettings, jobSettings, state) {
    var _this = this;





    _this['actionSettings'] = actionSettings;
    _this['jobSettings'] = jobSettings;

    _this['state'] = state;

  };

  /**
   * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKSplitMerge/model/Job} obj Optional instance to populate.
   * @return {module:SphereonSDKSplitMerge/model/Job} The populated <code>Job</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completionTime')) {
        obj['completionTime'] = ApiClient.convertToType(data['completionTime'], 'Date');
      }
      if (data.hasOwnProperty('jobId')) {
        obj['jobId'] = ApiClient.convertToType(data['jobId'], 'String');
      }
      if (data.hasOwnProperty('creationTime')) {
        obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
      }
      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], [FileEntry]);
      }
      if (data.hasOwnProperty('actionSettings')) {
        obj['actionSettings'] = ActionSettings.constructFromObject(data['actionSettings']);
      }
      if (data.hasOwnProperty('jobSettings')) {
        obj['jobSettings'] = JobSettings.constructFromObject(data['jobSettings']);
      }
      if (data.hasOwnProperty('updateTime')) {
        obj['updateTime'] = ApiClient.convertToType(data['updateTime'], 'Date');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('queueTime')) {
        obj['queueTime'] = ApiClient.convertToType(data['queueTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The completion date/time of this job in ISO 8601 format
   * @member {Date} completionTime
   */
  exports.prototype['completionTime'] = undefined;
  /**
   * @member {String} jobId
   */
  exports.prototype['jobId'] = undefined;
  /**
   * The creation date/time of this job in ISO 8601 format
   * @member {Date} creationTime
   */
  exports.prototype['creationTime'] = undefined;
  /**
   * The input files
   * @member {Array.<module:SphereonSDKSplitMerge/model/FileEntry>} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * @member {module:SphereonSDKSplitMerge/model/ActionSettings} actionSettings
   */
  exports.prototype['actionSettings'] = undefined;
  /**
   * @member {module:SphereonSDKSplitMerge/model/JobSettings} jobSettings
   */
  exports.prototype['jobSettings'] = undefined;
  /**
   * The last update date/time of this job in ISO 8601 format
   * @member {Date} updateTime
   */
  exports.prototype['updateTime'] = undefined;
  /**
   * The status of the job
   * @member {module:SphereonSDKSplitMerge/model/Job.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * The queue date/time of this job in ISO 8601 format
   * @member {Date} queueTime
   */
  exports.prototype['queueTime'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "INPUTS_UPLOADED"
     * @const
     */
    "INPUTS_UPLOADED": "INPUTS_UPLOADED",
    /**
     * value: "PROCESSING"
     * @const
     */
    "PROCESSING": "PROCESSING",
    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",
    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED"  };


  return exports;
}));


