

import * as S from '../styles';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import { FabricJSCanvas } from 'fabricjs-react'


import { SideBarCustomizer } from './SideBar';



import Text from '../Core/Text'
import { UseCustomizador } from './useCustomizador';
import StickersContainer, { StickersContinerHandler } from './Stickers';

import { ButtonBase } from '@mui/material';
import { FaCamera } from "react-icons/fa";

import html2canvas from 'html2canvas';
import  TextEditor from './TextEditor';

export interface CustomizadorHandler {
  setCaseBackground: (casePath: string) => void;
}

export interface CustomizadorContainerInterface {}

const Customizador = forwardRef<CustomizadorHandler,CustomizadorContainerInterface>((_,ref) => {
    

  

    const stickersModalRef = useRef<StickersContinerHandler>({} as StickersContinerHandler)

    const {TextEditorRef, setCaseBackground, CanvaDialogContainer, onReady, ObjectCanvasLength, AddBackgroundImage, onAddStickers, onAddText, onEditText, ...rest } = UseCustomizador();


    useImperativeHandle(ref, () => ({
      setCaseBackground
    }))
  
  
    const openStickerModal = () => {
      stickersModalRef.current.showModal()
    }

    const handleCapture = () => {
      if (CanvaDialogContainer.current) {
        html2canvas(CanvaDialogContainer.current, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/jpeg');
          const link = document.createElement('a');
          link.download = 'case_customizado.jpeg';
          link.href = imgData;
          link.click();
        });
      }
    };

    
    return (
      <S.Main>
        <S.DialogHeader>
            <Text $scale={16} $bold style={{
              color: 'white'
            }}> Estilize seu Case </Text>
              <ButtonBase onClick={handleCapture} >
                <FaCamera color='white' size={28}/>
              </ButtonBase>

            
        </S.DialogHeader>

        <S.DialogContent>
           <SideBarCustomizer 
            {...rest} 
            handleOpenStickerModal={openStickerModal} 
            isUndo={ObjectCanvasLength > 0} 
            AddText={() => TextEditorRef.current.showModal()}
            />

            <S.DialogMain ref={CanvaDialogContainer}>
                
                
                <FabricJSCanvas className="sample-canvas" onReady={onReady}/>
              
            </S.DialogMain>

            <StickersContainer ref={stickersModalRef} onClickSticker={onAddStickers}/>
            
          
        </S.DialogContent>

        <TextEditor  ref={TextEditorRef} onAddText={onAddText} OnEditText={onEditText}/>

      </S.Main>
        
    )
   

})

export default Customizador