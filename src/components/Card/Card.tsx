import * as Styled from './styled';

interface ICard {
	active: boolean,
	frontSideImg: string,
	backSideImg: string,
	onClick: () => void,
}

export const Card = ({ active, frontSideImg, backSideImg, onClick }: ICard): JSX.Element => {
	return (
		<Styled.Container onClick={onClick}>
			<Styled.FrontSide
				active={active}
				backgroundImg={frontSideImg}
			/>
			<Styled.BackSide
				active={active}
				backgroundImg={backSideImg}
			/>
		</Styled.Container>
	);
}
