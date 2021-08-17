// style
import { FC, ReactElement } from "react";
import {
    FirstHeroWrapper,
    LeftContent,
    RightContent
} from "./Style";

type FirstHeroProps = {
    leftContent?: ReactElement,
    rightContent?: ReactElement,

}
const FirstHero: FC<FirstHeroProps> = ({ leftContent, rightContent }) => {


    return (
        <FirstHeroWrapper>

            <LeftContent>
                {leftContent}
            </LeftContent>
            <RightContent>
                {rightContent}
            </RightContent>
        </FirstHeroWrapper>
    )
}

export default FirstHero;