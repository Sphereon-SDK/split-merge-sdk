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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SplitMerger);
  }
}(this, function(expect, SplitMerger) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SplitMerger.AllApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AllApi', function() {
    describe('createJob', function() {
      it('should call createJob successfully', function(done) {
        //uncomment below and update the code to test createJob
        //instance.createJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteJob', function() {
      it('should call deleteJob successfully', function(done) {
        //uncomment below and update the code to test deleteJob
        //instance.deleteJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getJob', function() {
      it('should call getJob successfully', function(done) {
        //uncomment below and update the code to test getJob
        //instance.getJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStream', function() {
      it('should call getStream successfully', function(done) {
        //uncomment below and update the code to test getStream
        //instance.getStream(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitMergeJob', function() {
      it('should call submitMergeJob successfully', function(done) {
        //uncomment below and update the code to test submitMergeJob
        //instance.submitMergeJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitSplitJob', function() {
      it('should call submitSplitJob successfully', function(done) {
        //uncomment below and update the code to test submitSplitJob
        //instance.submitSplitJob(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadFile', function() {
      it('should call uploadFile successfully', function(done) {
        //uncomment below and update the code to test uploadFile
        //instance.uploadFile(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
