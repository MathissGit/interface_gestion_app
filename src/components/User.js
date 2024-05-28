

function User({ id, avatar, lastname, firstname, datebirth, email, role, dateRegistration }) {
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<span className='lmj-plant-item-price'>{price}€</span>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}