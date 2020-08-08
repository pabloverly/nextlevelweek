import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderContainer, TopBar, LogoMain, HeaderContent, BackButton } from './styles';
import heart from '../../assets/images/icons/heart.svg';
import { IoIosArrowRoundBack, IoIosSunny, IoIosMoon } from 'react-icons/io';

interface Props {
	mainText: string;
	subText: string;
	toggleTheme(): void;
	description?: string;
}
const Header: React.FC<Props> = (props) => {
	const { title, colors } = useContext(ThemeContext);
	return (
		<HeaderContainer>
			<TopBar>
				<BackButton to="/" className="back-button">
					<IoIosArrowRoundBack size={56} color={colors.title} />
				</BackButton>
				<LogoMain className="logo-main">Proffy</LogoMain>
				<Switch
					onChange={() => {
						props.toggleTheme();
					}}
					checked={title === 'dark' ? true : false}
					checkedIcon={<IoIosMoon color={'#232423'} style={{ width: 30, height: 30 }} />}
					uncheckedIcon={<IoIosSunny color={'#fff'} style={{ width: 30, height: 30, marginLeft: 2 }} />}
					height={30}
					width={60}
					handleDiameter={25}
					offColor={'#232423'}
					onHandleColor={'#232423'}
					offHandleColor={'#fff'}
					onColor={'#fff'}
				/>
			</TopBar>
			<HeaderContent className="content-header">
				<strong>
					{props.mainText} <img src={heart} alt="love" style={{ width: 20 }} />
				</strong>
				<span>{props.subText}</span>
				{props.description && <p>{props.description}</p>} 
				{props.children}  
			</HeaderContent>
		</HeaderContainer>
	);
};
export default Header;
