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
    style?: CSSProperties;
    imageStyle?: CSSProperties;

}

const CaseComponent = ({label, srcPath, alt, customizable, imageStyle, style}: CaseComponentInterface) => {
    return (
        <S.Main>
              <Text $scale={14}> {label} </Text>

              <div style={{
                width: '100%'
              }}>

            
              <DynamicImage style={style} srcPath={srcPath} alt={alt}
                     imageStyle={imageStyle || {
                        height: '200px',
                        width: '200px',
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