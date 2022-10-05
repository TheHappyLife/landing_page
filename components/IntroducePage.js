import { Container, styled } from "@mui/material";
import Text from "./Text"



const IntroducePageWrapper = ({introduceContents}) => {

    const Wrapper = styled(Container)(() => ({

    }))

    return (
        <Wrapper>
            <Text></Text>
        </Wrapper>
    )
};

export default IntroducePageWrapper;