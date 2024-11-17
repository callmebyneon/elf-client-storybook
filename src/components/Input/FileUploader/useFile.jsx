import { useState } from 'react';

export function makeFileDragAndDrop() {
  const handleDragOver = (event) => {
    event.preventDefault();
    if (event?.dataTransfer) {
      if (event.target.closest('.file-picker-wrapper') === null
        && event.dataTransfer.effectAllowed !== 'none') {
        event.dataTransfer.dropEffect = 'none';
        event.dataTransfer.effectAllowed = 'none';
        return;
      }
      event.dataTransfer.dropEffect = 'copy';
      event.dataTransfer.effectAllowed = 'copy';
    }
  };

  const handleDrop = (event) => {
    if (event.target.closest('.file-picker-wrapper') === null) {
      event.preventDefault();
      return;
    }
  };
  return { handleDragOver, handleDrop };
}

/**
 * Hook for FileUploader Component
 * @param {array} defaultValue 
 * @returns object { InputtedFiles, ResetHandler, InputHandler, DeleteHandler, LoadingDoneHandler }
 */
export default function useFiles (defaultValue) {
  const defaultFiles = (Array.isArray(defaultValue) && defaultValue.length === 0) ? [] : defaultValue;
  const [files, setFiles] = useState(defaultFiles);
  const hasFile = (f) => f && f.length > 0;

  const handleInput = (event) => {
    event.preventDefault();
    const inputted = event.target.files || event.originalEvent?.dataTransfer.files;
    if (hasFile(inputted)) {
      const newFiles = Object.values(inputted).filter(f => {
        // * File 오브젝트의 instance인 경우에만 newFiles에 추가 (length 속성 등 제거)
        if (f instanceof File) return true;
        return false;
      })
      setFiles(newFiles);
    }
  }

  const handleReset = () => setFiles(defaultFiles)
  
  const handleDelete = (event) => {
    const thisId = event.target.closest(".selected-file__item-card").id;
    const thisIndex = thisId.substring(thisId.length - 1);
    setFiles(
      [...files].filter((file, index) => {
        return parseInt(index, 10) !== parseInt(thisIndex, 10);
      })
    )
  };
  
  const handleLoadingDone = (doneFile) => {
    setFiles(
      [...files].filter(file => file.lastModified !== doneFile.lastModified)
    );
  }


  return { files, handleReset, handleInput, handleDelete, handleLoadingDone }
}