import { useMemo } from "react";
import Text from "../../components/Core/Text";
import  Header from "../../components/Header"

import * as S from './styles';

import CaseComponent from "../../components/CaseComponent";


export const Home = () => {
    


    const casesArray = useMemo(() => {
        return Array.from({ length: 7 }, () => `cases/case1.png`);
    },[])



    return (
        <>
        <Header/>

        <S.Body>
            <Text $scale={18} $bold style={{
                color: 'var(--gray-800)',
                marginBottom: 10
            }}> Selecione o case de sua preferência e comece a personaliza-lo</Text> 

            <S.CasesList>
                {casesArray.map((casePath, index) => (
                    <S.CaseBox key={index}>
                        <CaseComponent 
                            srcPath={`../../${casePath}`} 
                            alt={`case ${index} + 1`} 
                          
                            label="Iphone 15 Pro Max"
                            customizable
        
                            />

                      </S.CaseBox>
                ))}
            </S.CasesList>

          
        </S.Body>   

       

        </>
    )
}