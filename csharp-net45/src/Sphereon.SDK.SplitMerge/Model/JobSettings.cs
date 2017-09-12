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

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Sphereon.SDK.SplitMerge.Model
{
    /// <summary>
    /// Job settings
    /// </summary>
    [DataContract]
    public partial class JobSettings :  IEquatable<JobSettings>
    {
        /// <summary>
        /// The provider of the storage backend
        /// </summary>
        /// <value>The provider of the storage backend</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StorageProviderEnum
        {
            
            /// <summary>
            /// Enum SUPPLIER for "API_SUPPLIER"
            /// </summary>
            [EnumMember(Value = "API_SUPPLIER")]
            SUPPLIER
        }

        /// <summary>
        /// The quality of the action engine that will be used to process the job
        /// </summary>
        /// <value>The quality of the action engine that will be used to process the job</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum EngineEnum
        {
            
            /// <summary>
            /// Enum BASIC for "BASIC"
            /// </summary>
            [EnumMember(Value = "BASIC")]
            BASIC,
            
            /// <summary>
            /// Enum ADVANCED for "ADVANCED"
            /// </summary>
            [EnumMember(Value = "ADVANCED")]
            ADVANCED,
            
            /// <summary>
            /// Enum PREMIUM for "PREMIUM"
            /// </summary>
            [EnumMember(Value = "PREMIUM")]
            PREMIUM
        }

        /// <summary>
        /// The provider of the storage backend
        /// </summary>
        /// <value>The provider of the storage backend</value>
        [DataMember(Name="storageProvider", EmitDefaultValue=false)]
        public StorageProviderEnum? StorageProvider { get; set; }
        /// <summary>
        /// The quality of the action engine that will be used to process the job
        /// </summary>
        /// <value>The quality of the action engine that will be used to process the job</value>
        [DataMember(Name="engine", EmitDefaultValue=false)]
        public EngineEnum? Engine { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="JobSettings" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected JobSettings() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="JobSettings" /> class.
        /// </summary>
        /// <param name="BackendSettings">Settings of the storage backend.</param>
        /// <param name="StorageProvider">The provider of the storage backend (required).</param>
        /// <param name="Engine">The quality of the action engine that will be used to process the job (required).</param>
        public JobSettings(BackendSettings BackendSettings = null, StorageProviderEnum? StorageProvider = null, EngineEnum? Engine = null)
        {
            // to ensure "StorageProvider" is required (not null)
            if (StorageProvider == null)
            {
                throw new InvalidDataException("StorageProvider is a required property for JobSettings and cannot be null");
            }
            else
            {
                this.StorageProvider = StorageProvider;
            }
            // to ensure "Engine" is required (not null)
            if (Engine == null)
            {
                throw new InvalidDataException("Engine is a required property for JobSettings and cannot be null");
            }
            else
            {
                this.Engine = Engine;
            }
            this.BackendSettings = BackendSettings;
        }
        
        /// <summary>
        /// Settings of the storage backend
        /// </summary>
        /// <value>Settings of the storage backend</value>
        [DataMember(Name="backendSettings", EmitDefaultValue=false)]
        public BackendSettings BackendSettings { get; set; }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class JobSettings {\n");
            sb.Append("  BackendSettings: ").Append(BackendSettings).Append("\n");
            sb.Append("  StorageProvider: ").Append(StorageProvider).Append("\n");
            sb.Append("  Engine: ").Append(Engine).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            return this.Equals(obj as JobSettings);
        }

        /// <summary>
        /// Returns true if JobSettings instances are equal
        /// </summary>
        /// <param name="other">Instance of JobSettings to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(JobSettings other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.BackendSettings == other.BackendSettings ||
                    this.BackendSettings != null &&
                    this.BackendSettings.Equals(other.BackendSettings)
                ) && 
                (
                    this.StorageProvider == other.StorageProvider ||
                    this.StorageProvider != null &&
                    this.StorageProvider.Equals(other.StorageProvider)
                ) && 
                (
                    this.Engine == other.Engine ||
                    this.Engine != null &&
                    this.Engine.Equals(other.Engine)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                if (this.BackendSettings != null)
                    hash = hash * 59 + this.BackendSettings.GetHashCode();
                if (this.StorageProvider != null)
                    hash = hash * 59 + this.StorageProvider.GetHashCode();
                if (this.Engine != null)
                    hash = hash * 59 + this.Engine.GetHashCode();
                return hash;
            }
        }
    }

}