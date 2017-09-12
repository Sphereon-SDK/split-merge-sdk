
# Lifecycle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionTime** | [**OffsetDateTime**](OffsetDateTime.md) | The time at which the job and files will be deleted, regardless of whether it has been retrieved or not. Maximal time is 1 day from job creation |  [optional]
**action** | [**ActionEnum**](#ActionEnum) | The action that will be performed when result is retrieved. Currently only delete is supported |  [optional]
**type** | [**TypeEnum**](#TypeEnum) | Determine when to delete the job and associated files.  RETRIEVAL means delete directly after retrieving the PDF file. When the file has not been retrieved before the merger time, it will be deleted regardless.  Time means, delete on specific time, regardles of whether it has been processed |  [optional]


<a name="ActionEnum"></a>
## Enum: ActionEnum
Name | Value
---- | -----
DELETE | &quot;DELETE&quot;


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
RETRIEVAL | &quot;RETRIEVAL&quot;
TIME | &quot;TIME&quot;



