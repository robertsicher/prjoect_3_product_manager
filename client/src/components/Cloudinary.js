import React from "react";

const uploadImage = (e) => {
  const url = "https://api.cloudinary.com/v1_1/phase2projectbirmingham/image/upload/";

  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "xuimcgyf");
  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {});
};

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <form method="post" enctype="multipart/form-data">
//           <input type="file" name="files[]" onChange={uploadImage} multiple />
//           <input type="submit" value="Upload Files" name="submit" />
//         </form>
//       </div>
//     );
//   }
// }
class Main extends React.Component {
    render() {
      let widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "your_cloud_name_here",
          uploadPreset: "your_present_here",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );
  
      return (
        <div>
          <button
            onClick={() => {
              widget.open();
            }}
          >
            Upload photo
          </button>
        </div>
      );
    }
  }

export default Main;
