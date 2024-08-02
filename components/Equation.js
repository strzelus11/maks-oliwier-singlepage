import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const PlanckEquation = () => {
	const equation = `B(\\lambda,T) = \\frac{2hc^2}{\\lambda^5} \\frac{1}{e^{\\frac{hc}{\\lambda k_B T}} - 1}`;

	return (
		<div className="text-white inline-flex bg-black/40 border border-white p-3">
			<BlockMath math={equation} />
		</div>
	);
};

export default PlanckEquation;