import { IconButton } from "@mui/material";
import { ReactNode, useRef } from "react";
import { AiFillPicture } from "react-icons/ai";

export interface UploadButtonType {
  Icon?: ReactNode;
  onHandleChange: (file: File) => void  
}

export const UploadButton = (props: UploadButtonType) => {
    const { Icon, onHandleChange } = props;
  
    const hiddenFileInput = useRef(null);
  
    const handleClick = () => {
        (hiddenFileInput.current as any)?.click();
      };

    const handleChange = (e: any) => {
        const fileUploaded = e.target.files[0];
        onHandleChange(fileUploaded);
    };

    return (
        <>
          <IconButton onClick={handleClick}>
            {Icon ? Icon : <AiFillPicture/>}
          </IconButton>
          <input
            type="file"
            onChange={handleChange}
            ref={hiddenFileInput}
            style={{display: 'none'}} // Make the file input element invisible
          />
        </>
      );


}

