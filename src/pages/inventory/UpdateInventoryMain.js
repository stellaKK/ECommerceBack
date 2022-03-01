import React, {Component} from 'react';
import UploadFile from "../UploadFile";
import UploadFileInfo from "../UploadFileInfo";


const acceptFileType = ".csv";

const uploadText = [
  "Files must be .csv format.",
  "You can add more than 1 item in the file.",
  "The following attributes must be included in the file: [SKU] and [inStock].",
  "No repeat rows are allowed in the file.",
];

class UpdateInventoryMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  onFileUpload = (data) => {
    console.log(data);
  };

  render() {
    let uploadData = {
      acceptType: acceptFileType,
    };
    return (

        <div>
          <UploadFileInfo text={uploadText} title="Instructions - Upload Inventory Feed" />
          <UploadFile data={uploadData} handleFileUpload={this.onFileUpload} />

        </div>

    );
  }

}

export default UpdateInventoryMain;