import { useMemo } from "react";
import Text from "../../components/Core/Text";
import  Header from "../../components/Header"

import * as S from './styles';

import CaseComponent from "../../components/CaseComponent";


export const Home = () => {
    const phoneNames = ['Iphone 15 Pro Max', 'Samsung Galaxy 22S']


    const casesArray = useMemo(() => {
        return Array.from({ length: 2 }, (_,index) => `cases/case${index + 1}.png`);
    },[])



    return (
        <>
        <Header/>

        <S.Body>
            <Text $scale={18} $bold style={{
                color: 'var(--gray-800)',
                marginBottom: 10
            }}> Selecione o case de sua preferência e comece a personalizá-lo</Text> 

            <S.CasesList>
                {casesArray.map((casePath, index) => (
                    <S.CaseBox key={index}>
                        <CaseComponent 
                            srcPath={`../../${casePath}`} 
                            alt={`case ${index} + 1`} 
                            label={phoneNames[index]}
                            customizable
        
                            />

                      </S.CaseBox>
                ))}
            </S.CasesList>

          
        </S.Body>   

       

        </>
    )
}