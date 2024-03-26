import { useEffect, useMemo, useRef } from "react";
import Customizador, { CustomizadorHandler } from "../../components/Customizador"

import { useSearchParams } from 'react-router-dom';

import * as S from './styles';

export const Customizacao = () => {

    const [searchParams, _] = useSearchParams();

    const CustomizadorRef = useRef({} as CustomizadorHandler);

    const paramValue = useMemo(() => {
        return searchParams.get('path')
    },[searchParams])

    useEffect(() => {
        if(paramValue){
            CustomizadorRef.current.setCaseBackground(paramValue);
        }
  
    },[paramValue])
   

 
   

    
    return (
        <S.CustomizadorContainer>
               <Customizador ref={CustomizadorRef}/>
        </S.CustomizadorContainer>
     
    )   
}