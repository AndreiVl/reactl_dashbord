import React from 'react';
import { Page } from '../../components/Organisms/Page/Page';


type PageLoginProps = {
	content?: React.ReactNode,
}

export const PageLogin: React.FC<PageLoginProps> = ({
	content,
}) => {
	return (
		<Page>
			{content}
		</Page>
	)
}