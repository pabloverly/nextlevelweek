import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card, CardHeader, TeacherImage, TeacherDetails, Description, Footer } from './styles';
import { IoLogoWhatsapp } from 'react-icons/io';


export interface Teacher {	
		ID: number
		NAME: string
		AVATAR: string
		WHATSAPP: string
		SUBJECT: string
		BIO: string
		COST: number
		SCHEDULEITEMS: string
	}

interface TeacherItemProprs {
	teacher: Teacher
}

const TeacherList: React.FC<TeacherItemProprs> = ({ teacher }) => {
	const { colors } = useContext(ThemeContext);
	return (
		<Card className="card-item">
			<CardHeader>
				<TeacherImage
					src={teacher.AVATAR}
					alt={teacher.NAME}
				/>
				<TeacherDetails>
					<strong>{teacher.NAME}</strong>
					<span>{teacher.SUBJECT}</span>
				</TeacherDetails>
			</CardHeader>
			<Description>
				{teacher.BIO}
			</Description>
			<Footer className="footer-card">
				<p>
				Preço/Hora <strong>R$ {teacher.COST}</strong>
				</p>

				<a target="_blank" 
					href={`https://wa.me/${teacher.WHATSAPP}`}
				>
					<IoLogoWhatsapp size={26} color={colors.input} />
					<span>Entrar em contato</span>
				</a>
			</Footer>
		</Card>
	);
}
export default TeacherList;
