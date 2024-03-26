import { BsSquareFill, BsTriangleFill   } from "react-icons/bs";
import { GoTypography } from "react-icons/go";
import { PiSmileyStickerThin } from "react-icons/pi";

import { UploadButton } from "../../Core/UploadButton";

import { IoArrowUndo } from "react-icons/io5";

import { IconButton } from '@mui/material';

import * as S from './styles'

export interface SideBarCustomizerInterface {
    AddText?: () => void
    onAddImage?: (file: File) => void;
    onAddRectangle?: () => void;
    onAddTriangle?: () => void;
    handleRemoveObject?: () => void;
    handleOpenStickerModal?: () => void;
    isUndo?: boolean;
}


export const SideBarCustomizer = ({
    AddText,
    onAddImage,
    onAddRectangle,
    onAddTriangle,
    handleRemoveObject,
    handleOpenStickerModal,
    isUndo
}: SideBarCustomizerInterface) => {

   return (
        <S.DialogSideBar>
                {AddText && (
                    <IconButton onClick={AddText}>
                        <GoTypography/>
                    </IconButton>
                )}

                {onAddImage && (
                     <UploadButton onHandleChange={onAddImage}/>
                )} 
                
              
                {handleOpenStickerModal && (
                      <IconButton onClick={handleOpenStickerModal}>
                        <PiSmileyStickerThin/>
                     </IconButton>
                )} 
                
              
                {onAddRectangle && (
                     <IconButton onClick={onAddRectangle}>
                        <BsSquareFill/>
                     </IconButton>
                )}      

                {onAddTriangle && (
                    <IconButton onClick={onAddTriangle}>
                      <BsTriangleFill/>
                    </IconButton>
                )}

                {isUndo && (
                    <IconButton onClick={handleRemoveObject}>
                     <IoArrowUndo/>
                  </IconButton>
                )}     
        </S.DialogSideBar>
   ) 
}