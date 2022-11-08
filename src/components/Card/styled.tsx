import styled, { css } from 'styled-components';

interface ICard {
	active?: boolean,
	backgroundImg: string
}

const cardBase = css`
	width: 320px;
 	height: 400px;
  border-radius: 15px;
  transition: all 0.5s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  max-width: 400px;
	height: 400px;
  position: relative;
	perspective: 150rem;
`;

export const FrontSide = styled.div<ICard>`
	${cardBase}

	${({ backgroundImg }) => backgroundImg && css`
		background-image: url(${backgroundImg});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	`}

	${({ active }) => active && css`
		transform: rotateY(180deg);
	`}
`;

export const BackSide = styled.div<ICard>`
	${cardBase}
	transform: rotateY(-180deg);

	${({ backgroundImg }) => backgroundImg && css`
		background-image: url(${backgroundImg});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	`}

	${({ active }) => active && css`
		transform: rotateY(0deg);
	`};
`;
