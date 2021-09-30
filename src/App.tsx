
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import Logo from "./assets/images/webpack-logo.png";
import Logo2 from "./assets/images/works__item-logo-elisabeth.png";
import LogoSvg from "./assets/images/icon--designing.svg";
import { H1 } from "./components/H1/H1.jsx";
import { H2 } from "./components/H2/H2.jsx";

interface Props {
	name:
	string
}

class App extends React.Component<Props> {
	render() {
		const { name } = this.props;
		return (
			<>
				<h1>
					Hello {name}
				</h1>
				<H1 className="h1" text="Title 1" />
				<H2 className="h2" text="Title 2" />

				<img src={Logo} alt="dadad" width="250" />
				<img src={Logo2} alt="dadad" width="250" />
				<img src={LogoSvg} alt="LogoSvg" width="250" />
				<img src={Logo} alt="dadad" width="250" />
				<div className="imbblcok"></div>
			</>
		);
	}
}

export default hot(App);
