import { BsSquareFill, BsTriangleFill   } from "react-icons/bs";
import { GoTypography } from "react-icons/go";
import { PiSmileyStickerThin } from "react-icons/pi";

import Tooltip from '@mui/material/Tooltip';

import { UploadButton } from "../../Core/UploadButton";

import { IoArrowUndo } from "react-icons/io5";

import { IconButton } from '@mui/material';

import { TbMarkdownOff } from "react-icons/tb";

import * as S from './styles'

export interface SideBarCustomizerInterface {
    AddText?: () => void
    onAddImage?: (file: File) => void;
    onAddRectangle?: () => void;
    onAddTriangle?: () => void;
    handleRemoveObject?: () => void;
    handleOpenStickerModal?: () => void;
    discardActiveObject?: () => void;
    isUndo?: boolean;
}


export const SideBarCustomizer = ({
    AddText,
    onAddImage,
    onAddRectangle,
    onAddTriangle,
    handleRemoveObject,
    discardActiveObject,
    handleOpenStickerModal,
    isUndo
}: SideBarCustomizerInterface) => {

   return (
        <S.DialogSideBar>
                {AddText && (
                    <Tooltip title="Adiciona texto">
                        <IconButton onClick={AddText}>
                            <GoTypography/>
                        </IconButton>
                    </Tooltip>
                )}

                {onAddImage && (
                    <Tooltip title="Adicionar imagem de background">
                        <div>   
                            <UploadButton onHandleChange={onAddImage}/>
                        </div>
                     
                     </Tooltip>
                )} 
                
              
                {handleOpenStickerModal && (
                      <Tooltip title="Adicionar figurinha">
                        <IconButton onClick={handleOpenStickerModal}>
                            <PiSmileyStickerThin/>
                        </IconButton>
                     </Tooltip>
                )} 
                
              
                {onAddRectangle && (
                      <Tooltip title="Adicionar retângulo">
                        <IconButton onClick={onAddRectangle}>
                            <BsSquareFill/>
                        </IconButton>
                     </Tooltip>
                )}      

                {onAddTriangle && (
                    <Tooltip title="Adicionar triangulo">
                        <IconButton onClick={onAddTriangle}>
                        <BsTriangleFill />
                        </IconButton>
                    </Tooltip>
                )}

                {discardActiveObject && (
                     <Tooltip title="Desmarcar objetos ativos">
                       <IconButton onClick={discardActiveObject}>
                        <TbMarkdownOff/>
                       </IconButton>
                    </Tooltip>
                     
                )}

                {isUndo && (
                <Tooltip title="Descartar">
                    <IconButton onClick={handleRemoveObject}>
                         <IoArrowUndo/>
                    </IconButton>
                  </Tooltip>
                )}     
        </S.DialogSideBar>
   ) 
}