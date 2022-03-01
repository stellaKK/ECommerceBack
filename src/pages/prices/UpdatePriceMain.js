import React, {Component} from 'react';
import UploadFile from "../UploadFile";
import UploadFileInfo from "../UploadFileInfo";


const acceptFileType = ".csv";

const uploadText = [
  "Files must be .csv format.",
  "You can add more than 1 item in the file.",
  "The following attributes must be included in the file: [SKU] and [price].",
  "No repeat rows are allowed in the file.",
];

class UpdatePriceMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  onFileUpload = (data) => {

    if (data) {
      console.log(data);
    } else {
      // if data is null
      console.log("No file chosen.");
    }

    // // Create an object of formData
    // const formData = new FormData();
    //
    // // Update the formData object
    // formData.append(
    //     "myFile",
    //     data,
    //     data.name
    // );
    //
    // // Details of the uploaded file
    // console.log(data);
  };

  render() {
    let uploadData = {
      acceptType: acceptFileType,
    };
    return (

        <div>
          <UploadFileInfo text={uploadText} title="Instructions - Upload Price Feed" />
          <UploadFile data={uploadData} handleFileUpload={this.onFileUpload} />

        </div>

    );
  }

}

export default UpdatePriceMain;