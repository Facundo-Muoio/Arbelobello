import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./Star.css";

export default function Star({ rating }) {
	function generator(stars) {
		const arr = [];
		for (let i = 0; i < stars; i++) {
			arr.push("fill");
		}
		while (arr.length < 5) {
			arr.push("unfill");
		}
		return arr;
	}

	const arrStars = generator(rating);

	return (
		<div className="container-opinions-stars">
			{arrStars.map(star =>
				star === "fill" ? (
					<AiFillStar className={star} key={crypto.randomUUID()} />
				) : (
					<AiOutlineStar className={star} key={crypto.randomUUID()} />
				)
			)}
		</div>
	);
}
