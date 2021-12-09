
import * as React from 'react';
import { hot } from "react-hot-loader/root";
// import Logo from "./assets/images/webpack-logo.png";
// import Logo2 from "./assets/images/works__item-logo-elisabeth.png";
// import LogoSvg from "./assets/images/icon--designing.svg";
// import { H1 } from "./components/Atoms/H1/H1";
// import { H2 } from "./components/Atoms/H2/H2";

import { PageMain } from "./Pages/PageMain";

interface Props {
	name:
	string
}

class App extends React.Component<Props> {
	render() {
		const { name } = this.props;
		return (
			<PageMain />
		);
	}
}

export default hot(App);
