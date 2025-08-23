// components/PoweredByLink.tsx (RSC)
import { Serbyte } from "./Serbyte";
import { Mpire } from "./Mpire";

export function PoweredByLink() {
	return (
		<>
			<div data-default-link>
				<Serbyte aria-label="Visit Serbyte Development" />
			</div>
			<div data-mpire-link>
				<Mpire aria-label="Visit Mpire Growth" />
			</div>
		</>
	);
}
