/* 
 * Split Merger
 *
 * The Split and Merge API allows you to split and merge files. For now you always have to define the filetype for the split or merge result. Supported types are Tiff, PDF or MS word files. In the future new types as well as type inferring will be implemented. Please note that this API will change in the way the merge or split is initiated from v0.1 to v0.2 which is scheduled later in 2017.
 *
 * OpenAPI spec version: 0.1
 * Contact: dev@sphereon.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


using NUnit.Framework;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using Sphereon.SDK.SplitMerge.Api;
using Sphereon.SDK.SplitMerge.Model;
using Sphereon.SDK.SplitMerge.Client;
using System.Reflection;

namespace Sphereon.SDK.SplitMerge.Test
{
    /// <summary>
    ///  Class for testing MergeSettings
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the model.
    /// </remarks>
    [TestFixture]
    public class MergeSettingsTests
    {
        // TODO uncomment below to declare an instance variable for MergeSettings
        //private MergeSettings instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of MergeSettings
            //instance = new MergeSettings();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of MergeSettings
        /// </summary>
        [Test]
        public void MergeSettingsInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOfType" MergeSettings
            //Assert.IsInstanceOfType<MergeSettings> (instance, "variable 'instance' is a MergeSettings");
        }

        /// <summary>
        /// Test the property 'Lifecycle'
        /// </summary>
        [Test]
        public void LifecycleTest()
        {
            // TODO unit test for the property 'Lifecycle'
        }
        /// <summary>
        /// Test the property 'DeliveryFormat'
        /// </summary>
        [Test]
        public void DeliveryFormatTest()
        {
            // TODO unit test for the property 'DeliveryFormat'
        }
        /// <summary>
        /// Test the property 'FileFormat'
        /// </summary>
        [Test]
        public void FileFormatTest()
        {
            // TODO unit test for the property 'FileFormat'
        }

    }

}
