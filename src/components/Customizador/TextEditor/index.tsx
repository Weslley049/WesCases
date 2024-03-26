import { forwardRef, useImperativeHandle, useState } from "react";

import * as S from './styles'
import {Button, ButtonBase } from "@mui/material";

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

    const [object, setObject] = useState();

    const [text, setText] = useState('');

    const [textStyle, setTextStyle] = useState({
        fontFamily: 'sans-serif',
        color: 'white',
    })

  

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
    }

    const handleClose = () => {
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
            <S.DialogMain>
                <S.DialogBody>
                        <S.DialogSideBar>
                                {options.color.map(([_, value], index) => (
                                    <ButtonBase key={index} onClick={() => handleChangeTextStyle('color', value)}>
                                        <S.ColorBox color={value}/>
                                    </ButtonBase>
                                
                                ))}
                        </S.DialogSideBar>


                    <input value={text} onChange={(e) => handleChangeText(e.target.value)} placeholder="Digite algo..." style={
                        {
                            border: 'none',
                            outline: 'none',
                            background: 'none',
                            ...textStyle,
                        }}/>

                    <S.DialogMainFonts>
                        {options.font.map(([_, value], index) => (
                            <ButtonBase key={index} onClick={() => handleChangeTextStyle('fontFamily', value)} >
                                <S.FontBox fontFamily={value}> 
                                    Aa  
                                </S.FontBox>
                            </ButtonBase>
                        
                        ))}
                    </S.DialogMainFonts>

                    <Button variant='contained' onClick={() => handleConfirm()}> Confirmar </Button>
                </S.DialogBody>

            

            
            </S.DialogMain>


        </S.Dialog>
    )
})

export default TextEditor;