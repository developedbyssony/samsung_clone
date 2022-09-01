import styled from "@emotion/styled"
import Button from './Button.tsx';

const TitleImp = styled.input``
const ContentInp = styled.textarea``

const EditContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 16px;
`;

const ButtonContainer = styled.div`
    display:flex;
    gap: 16px;
`;

const Edit = () => {
    return <EditContainer>
        <TitleImp />
        <ContentInp />
        <ButtonContainer>

            <div className="a">
                <Button>뒤로가기</Button>
                <Button>저장</Button>
            </div>
        
        </ButtonContainer>
    </EditContainer>
}

export default Edit;
