/*
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


package com.sphereon.sdk.splitmerge.api;

import com.sphereon.sdk.splitmerge.handler.ApiException;
import com.sphereon.sdk.splitmerge.model.*;
import org.junit.*;
import org.junit.runners.MethodSorters;

import java.io.File;
import java.net.URL;

/**
 * IT tests for Splitting
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class SplitIT extends AbstractIT {


    /**
     * Create a new job
     * <p>
     * Create a new job for a splitting or merging operation
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _01createJobTest() throws ApiException {
        createJobTestImpl();
    }


    /**
     * Upload a file for a job
     * <p>
     * Upload a file for a split or merge job. Processing will not be started yet.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _02uploadFileTest() throws ApiException {
        uploadFileTestImpl();
    }

    /**
     * Get a job manually
     * <p>
     * Get a job manually with all its stored objects
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _03getJobBeforeTest() throws ApiException {
        getJobBeforeTestImpl();
    }


    /**
     * Start splitting of a job
     * <p>
     * Start splitting of a job
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _04submitSplitJobTest() throws ApiException {
        SplitSettings settings = new SplitSettings().addSplitPagesItem(1).deliveryFormat(SplitSettings.DeliveryFormatEnum.ZIP).fileFormat(SplitSettings.FileFormatEnum.DOCX);
        Job response = API.submitSplitJob(job.getJobId(), settings);
        job = Job.StateEnum.PROCESSING == response.getState() ? assertJob(response, Job.StateEnum.PROCESSING) : assertJob(response, Job.StateEnum.DONE);
    }


    /**
     * Get a job manually
     * <p>
     * Get a job manually with all its stored objects
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _05getJobAfterTest() throws ApiException, InterruptedException {
        getJobAfterTestImpl();
    }


    /**
     * Get a job
     * <p>
     * Get a job
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void _06getResultFileStreamTest() throws ApiException {
        getResultFileStreamTestImpl();
        // TODO: Check for proper zip file. Wait for issue SPMS-128 since we should return a stream on the SDK
    }



}
