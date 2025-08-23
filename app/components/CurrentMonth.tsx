"use client";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

export const CurrentMonth: React.FC = () => {
	const [currentMonth, setCurrentMonth] = useState<string>("");

	useEffect(() => {
		const currentMonthFormatted = moment().tz("America/Los_Angeles").format("MMMM YYYY");
		setCurrentMonth(currentMonthFormatted);
	}, []);
	return <>{currentMonth}</>;
};
