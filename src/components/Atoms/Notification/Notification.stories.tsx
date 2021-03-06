import React from "react";
import { Notification } from "./Notification";

export default {
	title: 'Components/Atoms/Notification',
	component: Notification,
};

export const NotificationDefault = () => (
	<Notification />
);
export const NotificationRed = () => (
	<Notification red number={10} />
);