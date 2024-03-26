import Text from '../Core/Text';
import * as S from './styles'

const Header = () => {
    return(
        <S.Main>
            <Text $scale={22} $bold style={{
                color: 'white',
              
            }}>
                CasesWes
            </Text>

            <S.content>
                Personalize o seu case da maneira que você quiser
            </S.content>
        </S.Main>
    );
}

export default Header;