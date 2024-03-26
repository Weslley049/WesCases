import { CSSProperties } from "styled-components";
import Text from "../Core/Text";
import { DynamicImage } from "../DynamicImage";

import * as S from './styles'
import { Button } from "@mui/material";

import { TbPencilStar } from "react-icons/tb";

import { Link } from "react-router-dom";

export interface CaseComponentInterface {
    label: string;
    srcPath: string;
    alt: string;
    customizable?: boolean;
    imageStyle?: CSSProperties;

}

const CaseComponent = ({label, srcPath, alt, customizable, imageStyle}: CaseComponentInterface) => {
    return (
        <S.Main>
              <Text $scale={14}> {label} </Text>

              <div>

            
              <DynamicImage srcPath={srcPath} alt={alt} height='10%' width='10%'
                     imageStyle={imageStyle || {
                        height: '300px',
                        width: '300px',
                     }}
                />

                </div>

                {customizable && (
                    <Link to={`/customizacao/?path=${srcPath}`}>
                     <Button variant="contained"> 
                        <TbPencilStar size={18}/>
                        <Text> Customizar </Text>
                    </Button>
                    </Link>  
                )}
               
        </S.Main>
      
    )
}

export default CaseComponent;