import { GlobalStyle } from "./global";
import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Container } from "./styled";
import { default as memoryGameData } from '../src/memory-game-data.json';

interface ICard {
	id: number,
	frontUrl?: string,
	name: string,
	active: boolean
}


export function App() {
	const [cardList, setCardList] = useState(memoryGameData.images);
	const [selectedCards, setSelectedCards] = useState<ICard[]>([]);


	/*useEffect(() => {
		if(selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
			alert(`Você acertou!!!`)
		} else {
			const initialValues = selectedCards.map(card => ({...card, active: false }));
		}
	}, [selectedCards])*/


	const handleActiveCard = (card) => {
		const activeCard = cardList[card.id];

		const updatedList = cardList.map(card => {
			if(card.id === activeCard.id) {
				card.active = true

				setSelectedCards([...selectedCards, card]);
				return card;
			}

			return card;
		});

		setCardList(updatedList);
	}

  return (
		<Container>
			<GlobalStyle />
			<ul style={
				{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center", listStyle: "none"}}>
				{cardList.map((card) => (
					<li key={card.id} style={{ flex: "0 0 320px"}}>
						<Card
							data-card={card.name}
							onClick={() => handleActiveCard(card)}
							frontSideImg={memoryGameData.backURL}
							backSideImg={card.frontUrl}
							active={card.active}
						/>
					</li>
				))}
			</ul>
		</Container>
  );
}

