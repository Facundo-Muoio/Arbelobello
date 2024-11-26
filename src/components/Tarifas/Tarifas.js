import "./Tarifas.css";

export default function Tarfias() {
	const tarifa = {
		price: "30000",
		expiration: "01/03/2025",
	};

	return (
		<div className="container-tarifas">
			<div className="wraper-tarifa">
				<h2>
					2 a 3 personas <br /> Valor por noche ${tarifa.price}
				</h2>
				<p>
					<strong>Válida hasta el {tarifa.expiration}</strong>
				</p>
			</div>
			<div className="wraper-tarifa">
				<h2>
					4 a 6 personas <br />
					Valor por noche ${tarifa.price}
				</h2>
				<p>
					<strong>Válida hasta el {tarifa.expiration}</strong>
				</p>
			</div>
		</div>
	);
}
