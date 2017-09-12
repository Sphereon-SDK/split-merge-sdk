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
    ///  Class for testing Lifecycle
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the model.
    /// </remarks>
    [TestFixture]
    public class LifecycleTests
    {
        // TODO uncomment below to declare an instance variable for Lifecycle
        //private Lifecycle instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of Lifecycle
            //instance = new Lifecycle();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of Lifecycle
        /// </summary>
        [Test]
        public void LifecycleInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOfType" Lifecycle
            //Assert.IsInstanceOfType<Lifecycle> (instance, "variable 'instance' is a Lifecycle");
        }

        /// <summary>
        /// Test the property 'ActionTime'
        /// </summary>
        [Test]
        public void ActionTimeTest()
        {
            // TODO unit test for the property 'ActionTime'
        }
        /// <summary>
        /// Test the property 'Action'
        /// </summary>
        [Test]
        public void ActionTest()
        {
            // TODO unit test for the property 'Action'
        }
        /// <summary>
        /// Test the property 'Type'
        /// </summary>
        [Test]
        public void TypeTest()
        {
            // TODO unit test for the property 'Type'
        }

    }

}
