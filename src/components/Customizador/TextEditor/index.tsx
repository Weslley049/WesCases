import { forwardRef, useImperativeHandle, useState } from "react";

import * as S from './styles'
import {Button, ButtonBase } from "@mui/material";

import { IoIosCheckmarkCircle } from "react-icons/io";

import options from './utils';


export interface TextEditorHandler {
    hiddenModal: () => void
    showModal: () => void;
    returnText: () => {
        text: string;
        textStyle: any;
    };
    handleReset: (object: any, text: string, textStyle: any) => void;
    
}
  
export interface TextEditorInterface {
    onAddText: (text: string, options: any) => void;
    OnEditText: (text: string, options: any) => void;
}
  


const TextEditor = forwardRef<TextEditorHandler,TextEditorInterface>((props,ref) => {
    const { onAddText, OnEditText } = props;
    
    const [open, setOpen] = useState(false);

    const [selectedFontFamily, setSelectedFontFamily] = useState(0);


    const [object, setObject] = useState(null);

    const [text, setText] = useState('');

    const [textStyle, setTextStyle] = useState({
        fontFamily: options.font[0][1],
        color:  options.color[0][0],
    })

  
    const handleSelectedFont = () => {
        if(selectedFontFamily + 1 > options.font.length - 1){
            return setSelectedFontFamily(0)
        }

        return setSelectedFontFamily(selectedFontFamily + 1)
    }

    const returnText = () => {
        return {
            text,
            textStyle
        }
    }

    useImperativeHandle(ref, () => ({
        hiddenModal: handleClose,
        showModal: handleOpen,
        returnText,
        handleReset
      }))

 
    
    const handleChangeText = (value: string) => {
        setText(value);
    }

    const handleReset = (object: any, text: string, textStyle: any) => {
        setObject(object);
        setText(text);
        setTextStyle(textStyle);

        const fontIndex = options.font.findIndex(([key, value]) => value === textStyle.fontFamily )   


        setSelectedFontFamily(fontIndex || 0);
    }

    const handleClose = () => {
    
        handleReset(null, '', {
            fontFamily: options.font[0][1],
            color:  options.color[0][0],
        } );

        setOpen(false)

    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleConfirm = () => {
        if(object){
            OnEditText(text, textStyle);     
        }else{
            onAddText(text, textStyle)
        }
       
            
        handleClose();
    }

    const handleChangeTextStyle = (type: string, newValue: string) => {
        setTextStyle((old) => {
            return {
                ...old,
                [type]: newValue
            }
        })
    }

   
    return (
        <S.Dialog open={open} onClose={handleClose} PaperProps={{
            sx: {
                backgroundColor: 'transparent'
            }
        }}>
            <S.DialogMainFonts>
                            <ButtonBase onClick={() => {
                                handleSelectedFont();
                                handleChangeTextStyle('fontFamily', 
                                
                                selectedFontFamily + 1 > options.font.length - 1 ? options.font[0][1] : 
                                options.font[selectedFontFamily + 1][1]
                                )
                            }}>
                                <S.FontBox fontFamily={textStyle.fontFamily}> 
                                    {options.font[selectedFontFamily][0]} 
                                </S.FontBox>    
                            </ButtonBase>

                </S.DialogMainFonts>

            <S.DialogMain>

            
                
                <S.DialogBody>
                    <input value={text}  onChange={(e) => handleChangeText(e.target.value)} placeholder="Digite algo..." style={
                        {
                            border: 'none',
                            outline: 'none',
                            background: 'none',
                            ...textStyle,
                        }}/>
  
                </S.DialogBody>

               

               
             
                
                
                <S.DialogSideBar>
                                <ButtonBase onClick={() => handleConfirm()}> 
                                    <IoIosCheckmarkCircle color="white" size={30}/>
                                 </ButtonBase>
                            
                                {options.color.map(([_, value], index) => (
                                    <ButtonBase key={index} onClick={() => handleChangeTextStyle('color', value)}>
                                        <S.ColorBox color={value}/>
                                    </ButtonBase>
                                
                                ))}
                </S.DialogSideBar>

            

            
            </S.DialogMain>


        </S.Dialog>
    )
})

export default TextEditor;