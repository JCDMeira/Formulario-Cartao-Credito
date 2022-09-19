import './CardFrente.css'

const CardFrente = () => {

    return (
        <div className='cartao-frente'>
            <span className="logo_cartao"><svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg></span>
			<p className ="cartao__numero" id="cartao__numero">0000 0000 0000 0000</p>
			<div className ="cartao__frente_dados">
				<p className ="cartao__nome" id="cartao__nome">Ana C N Perdigão</p>
				<div className ="validade">
					<p className ="cartao__validade_mes" id="cartao__mes">00</p>
					<p>/</p>
					<p className ="cartao__validade_ano" id="cartao__ano">00</p>
				</div>
			</div>
        </div>
    )
}

export default CardFrente