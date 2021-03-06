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
    define(['SphereonSDKSplitMerge/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SplitMerger) {
      root.SplitMerger = {};
    }
    root.SplitMerger.BackendSettings = factory(root.SplitMerger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BackendSettings model module.
   * @module SphereonSDKSplitMerge/model/BackendSettings
   * @version 0.1
   */

  /**
   * Constructs a new <code>BackendSettings</code>.
   * @alias module:SphereonSDKSplitMerge/model/BackendSettings
   * @class
   * @param container {String} name of the container where files will be stored
   * @param backendType {module:SphereonSDKSplitMerge/model/BackendSettings.BackendTypeEnum} type of the backend where files will be stored
   * @param backend {String} name of the backend where files will be stored
   */
  var exports = function(container, backendType, backend) {
    var _this = this;

    _this['container'] = container;
    _this['backendType'] = backendType;
    _this['backend'] = backend;
  };

  /**
   * Constructs a <code>BackendSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKSplitMerge/model/BackendSettings} obj Optional instance to populate.
   * @return {module:SphereonSDKSplitMerge/model/BackendSettings} The populated <code>BackendSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('container')) {
        obj['container'] = ApiClient.convertToType(data['container'], 'String');
      }
      if (data.hasOwnProperty('backendType')) {
        obj['backendType'] = ApiClient.convertToType(data['backendType'], 'String');
      }
      if (data.hasOwnProperty('backend')) {
        obj['backend'] = ApiClient.convertToType(data['backend'], 'String');
      }
    }
    return obj;
  }

  /**
   * name of the container where files will be stored
   * @member {String} container
   */
  exports.prototype['container'] = undefined;
  /**
   * type of the backend where files will be stored
   * @member {module:SphereonSDKSplitMerge/model/BackendSettings.BackendTypeEnum} backendType
   */
  exports.prototype['backendType'] = undefined;
  /**
   * name of the backend where files will be stored
   * @member {String} backend
   */
  exports.prototype['backend'] = undefined;


  /**
   * Allowed values for the <code>backendType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BackendTypeEnum = {
    /**
     * value: "FILESYSTEM"
     * @const
     */
    "FILESYSTEM": "FILESYSTEM",
    /**
     * value: "AMAZON_S3"
     * @const
     */
    "AMAZON_S3": "AMAZON_S3",
    /**
     * value: "MS_AZURE_BLOB_STORAGE"
     * @const
     */
    "MS_AZURE_BLOB_STORAGE": "MS_AZURE_BLOB_STORAGE",
    /**
     * value: "GOOGLE_CLOUD_STORAGE"
     * @const
     */
    "GOOGLE_CLOUD_STORAGE": "GOOGLE_CLOUD_STORAGE"  };


  return exports;
}));


