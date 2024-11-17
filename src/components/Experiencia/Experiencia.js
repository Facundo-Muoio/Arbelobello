import React, { useRef, useState } from "react";
import { createObserver } from "../../helpers/helpers";
import { useAnimation } from "../../hooks/hooks";
import "./Experiencia.css";

export default function Experiencia() {
	const contentRef = useRef(null);
	const [contentIsVisible, setcontentIsVisible] = useState(false);
	const contentObserver = createObserver(setcontentIsVisible, {
		threshold: 0.8,
	});

	useAnimation(contentObserver, contentRef);

	return (
		<div className="container-experience" ref={contentRef}>
			{contentIsVisible && (
				<>
					<div className="experiencie-images-container">
						<div className="small-image">
							<img
								src="https://previews.dropbox.com/p/thumb/ACcNodmCNsJeX3zCe4O12aLjgYio-Qiw-LYwTVv2Kg7i9E2GCdiFfAZwjsHBMehvzzZ_APhlGX_D75v59kMh7bMjY2DhxPVOYbPVkX0LV5NvhKSWUesKMacwGTYFb-Dtg_jMc9UANfXzuWlJmBTzsXVCzV9aailfhzjiCypn6bjXNgFkAbV3Xxwx5wnd7aA0TS9VeT1r1-YzuA9QBL5Udc1BuI92eXxPKPQ1BD4O780dTseXhMvJ9j3bfqirUrVezDFrA_jlFeK9z162keDb5Oe2669VFJTO2BKToc0coygGhgPsK3G9BIs3y-dnHBK-jTYNqM-xGFBn2DShIUSnCLr3/p.jpeg?is_prewarmed=true"
								alt="Árbol en el jardín"
								className="image"
							/>
						</div>
						<div className="medium-image">
							<img
								src="https://previews.dropbox.com/p/thumb/ACdHlhtCDfsBQ2Td5b_L6gjIg625yvpy6xF9pKnTnaK77eiU4CLGb4RKOQBOUOXL-RKWDzOMWqQcajtiq_myCRXvNIXpF0gBDfoonYVD7UDJj0kGNojJuMQ_fjWX23eKQgWroL7yB1LmmVyuu-L4ymj7XLbpfg75EMEykZi0pab-f9xC6llFwa2dvbefCLq8Orw-XZDdbtFbQ3n9nTaaQZS_BSZsL6DMPCnKGSO_JmDMOla2_T7nlrs6lm08-zVmBh9R2-gNkZ07XuTTsXj92stBSxt2imB55InRneX-L9F83b6OIiTIMo0zZDv82kTN-eax0pDIFAS2DSqXoNwFCQla/p.jpeg?is_prewarmed=true"
								alt="Habitación interior"
								className="image "
							/>
						</div>
						<div className="large-image">
							<img
								src="https://previews.dropbox.com/p/thumb/ACcDMDwhipbJ9b4vkD3nB34MsCI6s6LLKD6E3wmUXTzxQ9_FUf9JE3JXp-3b3HNT7ls6sAMurxKO5EWusZI9wm1FJgQOGolJHDxosZFfKb2DPaa1osbEBeECXUo_oav03gStKGsJLkJLfbab4r8Pi3boCPgZYRrWiIpj33dFkguRRDt9JQr_v-BKYko3rEh02u74mfEGGvjVgsm4Y403xVqiGv6MkE8h_cOSEoYsVIxKJLHlEU39L-dy1YuuZ35V-WHzSSu8jyyOXAeZr-FAymWo4YHDNqPjoL9egNFemE3F4xKJbU3f1WtvDc3whZ_hQ0jSb1N_eD9xdKhTBsFIA7iS/p.jpeg?is_prewarmed=true"
								alt="Vista desde la ventana"
								className="image"
							/>
						</div>
					</div>

					<div className="experience-text-container">
						<div className="text-box">
							<h1>
								Alberobello Casa Serrana es <br /> más que un destino turístico
							</h1>
							<p>
								es una experiencia única, íntima y <br /> personalizada. Un
								lugar donde el tiempo <br />
								se detiene y los recuerdos florecen como <br /> las flores de la
								montaña.
							</p>
						</div>
						<div className="button-box">
							<button className="btn-experience">VER MÁS</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
