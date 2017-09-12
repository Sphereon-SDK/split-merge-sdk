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
    root.SplitMerger.FileEntry = factory(root.SplitMerger.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FileEntry model module.
   * @module SphereonSDKSplitMerge/model/FileEntry
   * @version 0.1
   */

  /**
   * Constructs a new <code>FileEntry</code>.
   * @alias module:SphereonSDKSplitMerge/model/FileEntry
   * @class
   * @param filename {String} name of file that is uploaded for a job
   * @param fileFormat {module:SphereonSDKSplitMerge/model/FileEntry.FileFormatEnum} file format of file
   * @param fileId {String} an identifier for the file that is used for file storage
   */
  var exports = function(filename, fileFormat, fileId) {
    var _this = this;

    _this['filename'] = filename;
    _this['fileFormat'] = fileFormat;
    _this['fileId'] = fileId;
  };

  /**
   * Constructs a <code>FileEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKSplitMerge/model/FileEntry} obj Optional instance to populate.
   * @return {module:SphereonSDKSplitMerge/model/FileEntry} The populated <code>FileEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('fileFormat')) {
        obj['fileFormat'] = ApiClient.convertToType(data['fileFormat'], 'String');
      }
      if (data.hasOwnProperty('fileId')) {
        obj['fileId'] = ApiClient.convertToType(data['fileId'], 'String');
      }
    }
    return obj;
  }

  /**
   * name of file that is uploaded for a job
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * file format of file
   * @member {module:SphereonSDKSplitMerge/model/FileEntry.FileFormatEnum} fileFormat
   */
  exports.prototype['fileFormat'] = undefined;
  /**
   * an identifier for the file that is used for file storage
   * @member {String} fileId
   */
  exports.prototype['fileId'] = undefined;


  /**
   * Allowed values for the <code>fileFormat</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FileFormatEnum = {
    /**
     * value: "TIFF"
     * @const
     */
    "TIFF": "TIFF",
    /**
     * value: "PDF"
     * @const
     */
    "PDF": "PDF",
    /**
     * value: "DOCX"
     * @const
     */
    "DOCX": "DOCX",
    /**
     * value: "DOC"
     * @const
     */
    "DOC": "DOC"  };


  return exports;
}));


