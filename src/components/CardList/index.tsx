import Card from "../Card"
import "./style.scss"

const CardList = () => {
	return (
		<div className='card-container'>
			<Card title='To do'></Card>
			<Card title='in Progress'></Card>
			<Card title='Done'></Card>
		</div>
	)
}

export default CardList
