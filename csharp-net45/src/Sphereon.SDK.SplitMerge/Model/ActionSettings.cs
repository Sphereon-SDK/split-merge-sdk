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
    /// ActionSettings
    /// </summary>
    [DataContract]
    public partial class ActionSettings :  IEquatable<ActionSettings>
    {
        /// <summary>
        /// Gets or Sets DeliveryFormat
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DeliveryFormatEnum
        {
            
            /// <summary>
            /// Enum FILE for "FILE"
            /// </summary>
            [EnumMember(Value = "FILE")]
            FILE,
            
            /// <summary>
            /// Enum ZIP for "ZIP"
            /// </summary>
            [EnumMember(Value = "ZIP")]
            ZIP,
            
            /// <summary>
            /// Enum _7ZIP for "_7ZIP"
            /// </summary>
            [EnumMember(Value = "_7ZIP")]
            _7ZIP
        }

        /// <summary>
        /// Gets or Sets FileFormat
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FileFormatEnum
        {
            
            /// <summary>
            /// Enum TIFF for "TIFF"
            /// </summary>
            [EnumMember(Value = "TIFF")]
            TIFF,
            
            /// <summary>
            /// Enum PDF for "PDF"
            /// </summary>
            [EnumMember(Value = "PDF")]
            PDF,
            
            /// <summary>
            /// Enum DOCX for "DOCX"
            /// </summary>
            [EnumMember(Value = "DOCX")]
            DOCX,
            
            /// <summary>
            /// Enum DOC for "DOC"
            /// </summary>
            [EnumMember(Value = "DOC")]
            DOC
        }

        /// <summary>
        /// Gets or Sets DeliveryFormat
        /// </summary>
        [DataMember(Name="deliveryFormat", EmitDefaultValue=false)]
        public DeliveryFormatEnum? DeliveryFormat { get; set; }
        /// <summary>
        /// Gets or Sets FileFormat
        /// </summary>
        [DataMember(Name="fileFormat", EmitDefaultValue=false)]
        public FileFormatEnum? FileFormat { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionSettings" /> class.
        /// </summary>
        /// <param name="Lifecycle">Lifecycle.</param>
        /// <param name="DeliveryFormat">DeliveryFormat.</param>
        /// <param name="FileFormat">FileFormat.</param>
        public ActionSettings(Lifecycle Lifecycle = null, DeliveryFormatEnum? DeliveryFormat = null, FileFormatEnum? FileFormat = null)
        {
            this.Lifecycle = Lifecycle;
            this.DeliveryFormat = DeliveryFormat;
            this.FileFormat = FileFormat;
        }
        
        /// <summary>
        /// Gets or Sets Lifecycle
        /// </summary>
        [DataMember(Name="lifecycle", EmitDefaultValue=false)]
        public Lifecycle Lifecycle { get; set; }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ActionSettings {\n");
            sb.Append("  Lifecycle: ").Append(Lifecycle).Append("\n");
            sb.Append("  DeliveryFormat: ").Append(DeliveryFormat).Append("\n");
            sb.Append("  FileFormat: ").Append(FileFormat).Append("\n");
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
            return this.Equals(obj as ActionSettings);
        }

        /// <summary>
        /// Returns true if ActionSettings instances are equal
        /// </summary>
        /// <param name="other">Instance of ActionSettings to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ActionSettings other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.Lifecycle == other.Lifecycle ||
                    this.Lifecycle != null &&
                    this.Lifecycle.Equals(other.Lifecycle)
                ) && 
                (
                    this.DeliveryFormat == other.DeliveryFormat ||
                    this.DeliveryFormat != null &&
                    this.DeliveryFormat.Equals(other.DeliveryFormat)
                ) && 
                (
                    this.FileFormat == other.FileFormat ||
                    this.FileFormat != null &&
                    this.FileFormat.Equals(other.FileFormat)
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
                if (this.Lifecycle != null)
                    hash = hash * 59 + this.Lifecycle.GetHashCode();
                if (this.DeliveryFormat != null)
                    hash = hash * 59 + this.DeliveryFormat.GetHashCode();
                if (this.FileFormat != null)
                    hash = hash * 59 + this.FileFormat.GetHashCode();
                return hash;
            }
        }
    }

}