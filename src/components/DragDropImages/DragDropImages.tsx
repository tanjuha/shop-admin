import React, { useState } from "react";
import { formatBytes } from "../../utils/helpers";
import { IPhoto } from "../../utils/interfaces";
import "./style.css";

const DragDropImages = ({ state, setState }: any) => {
  const [dragEnterOver, setDragEnterOver] = useState(false);

  const handleFileChange = (e: any) => {
    let files = e.target.files;
    handFiles(files);
  };

  const handFiles = (files: any) => {
    let photosArr: any = [];

    for (let file of files) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        let fileObj = {
          name: file.name,
          type: file.type,
          size: file.size,
          src: reader.result,
        };

        photosArr.push(fileObj);
        setState({
          ...state,
          photos: [...photos, ...photosArr],
        });
      });
    }
  };

  const handleDelete = (e: any) => {
    let target = e.target.parentElement;
    let targetIndex = target.dataset.imgindex * 1;
    setState({
      ...state,
      photos: [
        ...photos.slice(0, targetIndex),
        ...photos.slice(targetIndex + 1),
      ],
    });
  };

  const handleDragEnterOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnterOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnterOver(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnterOver(false);

    let dt = e.dataTransfer;
    let files = dt.files;
    handFiles(files);
  };

  const { photos } = state;
  return (
    <div className="file-upload">
      <div className="custom-form-group">
        <div
          className={
            dragEnterOver
              ? "custom-file-drop-area highlight"
              : "custom-file-drop-area"
          }
          onDragEnter={handleDragEnterOver}
          onDragOver={handleDragEnterOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            name="photos"
            placeholder="Enter photos"
            multiple
            id="filephotos"
            onChange={handleFileChange}
          />
          <label htmlFor="filephotos">
            Drop files here or click to upload.
          </label>
        </div>
        <div className="photos-preview">
          {photos.length > 0 &&
            photos.map((item: IPhoto, index: number) => {
              const sizeImg = formatBytes(item.size);
              return (
                <div className="prev-img justify-content-between" key={index} data-imgindex={index}>
                 <div className="d-flex align-items-center">
                 <img
                    className="img-item"
                    src={item.src}
                    alt={item.name}
                  />
                  <div className="d-flex flex-column mx-2">
                    <span className="img-name">{item.name}</span>
                    <strong className="img-size">{sizeImg}</strong>
                  </div>
                 </div>
                  <span className="img-delete" onClick={handleDelete}>&times;</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DragDropImages;
