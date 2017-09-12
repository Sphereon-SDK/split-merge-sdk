# split-merge-sdk-java8-jersey2

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>com.sphereon.sdk</groupId>
    <artifactId>split-merge-sdk-java8-jersey2</artifactId>
    <version>0.1.0-SNAPSHOT</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "com.sphereon.sdk:split-merge-sdk-java8-jersey2:0.1.0-SNAPSHOT"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/split-merge-sdk-java8-jersey2-0.1.0-SNAPSHOT.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.sphereon.sdk.splitmerge.handler.*;
import com.sphereon.sdk.splitmerge.handler.auth.*;
import com.sphereon.sdk.splitmerge.model.*;
import com.sphereon.sdk.splitmerge.api.AllApi;

import java.io.File;
import java.util.*;

public class AllApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure OAuth2 access token for authorization: oauth2schema
        OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
        oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

        AllApi apiInstance = new AllApi();
        JobSettings jobSettings = new JobSettings(); // JobSettings | jobSettings
        try {
            Job result = apiInstance.createJob(jobSettings);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AllApi#createJob");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://gw.api.cloud.sphereon.com/split-merge/0.1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AllApi* | [**createJob**](docs/AllApi.md#createJob) | **POST** /jobs | Create a new job
*AllApi* | [**deleteJob**](docs/AllApi.md#deleteJob) | **DELETE** /jobs/{jobid} | Delete a job manually
*AllApi* | [**getJob**](docs/AllApi.md#getJob) | **GET** /jobs/{jobid} | Get a job
*AllApi* | [**getStream**](docs/AllApi.md#getStream) | **GET** /jobs/{jobid}/stream | Get the current result stream
*AllApi* | [**submitMergeJob**](docs/AllApi.md#submitMergeJob) | **PUT** /jobs/{jobid}/merge | Start merging of a job
*AllApi* | [**submitSplitJob**](docs/AllApi.md#submitSplitJob) | **PUT** /jobs/{jobid}/split | Start splitting of a job
*AllApi* | [**uploadFile**](docs/AllApi.md#uploadFile) | **POST** /jobs/{jobid} | Upload a file for a job


## Documentation for Models

 - [ActionSettings](docs/ActionSettings.md)
 - [BackendSettings](docs/BackendSettings.md)
 - [Error](docs/Error.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [FileEntry](docs/FileEntry.md)
 - [Job](docs/Job.md)
 - [JobSettings](docs/JobSettings.md)
 - [Lifecycle](docs/Lifecycle.md)
 - [MergeSettings](docs/MergeSettings.md)
 - [SplitSettings](docs/SplitSettings.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### oauth2schema

- **Type**: OAuth
- **Flow**: application
- **Authorizatoin URL**: 
- **Scopes**: 
  - global: accessEverything


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

dev@sphereon.com

