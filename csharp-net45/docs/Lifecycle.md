# Sphereon.SDK.SplitMerge.Model.Lifecycle
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionTime** | **DateTime?** | The time at which the job and files will be deleted, regardless of whether it has been retrieved or not. Maximal time is 1 day from job creation | [optional] 
**Action** | **string** | The action that will be performed when result is retrieved. Currently only delete is supported | [optional] 
**Type** | **string** | Determine when to delete the job and associated files.  RETRIEVAL means delete directly after retrieving the PDF file. When the file has not been retrieved before the merger time, it will be deleted regardless.  Time means, delete on specific time, regardles of whether it has been processed | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

