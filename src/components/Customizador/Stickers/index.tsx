import { ButtonBase} from "@mui/material";
import { forwardRef, useImperativeHandle, useMemo, useState } from "react"

import { IoIosCloseCircleOutline } from "react-icons/io";

import * as S from './styles'
import Text from "../../Core/Text";
import { DynamicImage } from "../../DynamicImage";



export interface StickersContinerHandler {
    hiddenModal: () => void
	showModal: () => void
	
}

export interface StickerContainerInterface {
    onClickSticker: (imagePath: string) => void;
}


const StickersContainer = forwardRef<StickersContinerHandler,StickerContainerInterface>((props,ref) => {
    const {onClickSticker} = props;
    
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true)
    }

    const hiddenModal = () => {
        setOpen(false)
    }


    useImperativeHandle(ref, () => ({
		hiddenModal,
		showModal,

	}))


    const imagesArray = useMemo(() => {
        return Array.from({ length: 8 }, (_, index) => `stickers/sticker${String(index + 1)}.png`);
    },[])


   

    const onSelectSticker = (imagePath: string) => {
        onClickSticker(imagePath)

        setOpen(false);
    }
  
    return (
            <S.Dialog open={open}  PaperProps={{
                sx: {
                    backgroundColor: 'transparent'
                }
            }}>
                    <S.DialogHeader>
                        <Text $scale={16} style={{
                            color: 'white'
                        }}> Escolha seu sticker </Text>

                        <ButtonBase>
                            <IoIosCloseCircleOutline color="white" size={26} onClick={hiddenModal}/>
                        </ButtonBase>
                    
                    </S.DialogHeader>
                    <S.DialogBody>
                        {imagesArray.map((imagePath,index) => (
                            <ButtonBase key={index} onClick={() => onSelectSticker(imagePath)} style={{
                                margin: 10,
                            }}>
                                <DynamicImage srcPath={`../../../${imagePath}`} alt={`Imagem ${index + 1}`} imageStyle={{
                                    height: 60,
                                    width: 60
                                }}>
                                    
                                </DynamicImage>
                            </ButtonBase>
                            
                        ))}    
                    </S.DialogBody>
              </S.Dialog>
    )
})

export default StickersContainer;