import React ,{ useState, FormEvent } from 'react';
import { TeacherListContent, Form, Main } from './styles';
import Header from '../../Components/Header';
import TeacherItem ,{Teacher} from '../../Components/TeacherItem';
import InputComponent from '../../Components/InputComponent';
import SelectComponent from '../../Components/SelectComponent';
import api from '../../services/api';


interface Props {
	toggleTheme(): void;
}

 const TeacherList: React.FC<Props> = ({ toggleTheme }) => {
	const [teachers, setTeachers] = useState([])
	
	const [subject, setSubject] = useState('')
	const [week_day, setWeek_day] = useState('')
	const [time, setTime] = useState('')

	async function seachTeachers  (e: FormEvent) {
		e.preventDefault()		
		const valor = JSON.stringify(subject)

	const response = await	api.get('classes', {
			params: {
				subject			
			}
		})
		setTeachers(response.data)
		console.log(response.data,subject)
	}


	return (
		<div className="container">
			<TeacherListContent>
				<Header
					mainText="Estes são os proffys disponíveis."
					subText="Informe a matéria, dia de semana e o horário para encontrar o melhor proffy!"
					toggleTheme={toggleTheme}
				/>
				<Form className="form-teacher-list" onSubmit={seachTeachers}>
					<SelectComponent
						labelText="Disciplina"
						htmlFor="subject"
						value={subject}
						onChange={e => { setSubject(e.target.value)}}
						options={[
							{ value: 'ARTES', label: 'ARTES' },
							{ value: 'BIOLOGIA', label: 'BIOLOGIA' },
							{ value: 'CIENCIAS', label: 'CIENCIAS' },
							{ value: 'QUIMICA', label: 'QUIMICA' },
							{ value: 'FILOSOFIA', label: 'FILOSOFIA' },
							{ value: 'GEOGRAFIA', label: 'GEOGRAFIA' }
						]}
					/>
					<SelectComponent
						labelText="Dia da semana"
						htmlFor="week_day"
						value={week_day}
						onChange={e => { setWeek_day(e.target.value)}}
						options={[
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda-feira' },
							{ value: '2', label: 'Terça-feira' },
							{ value: '3', label: 'Quarta-feira' },
							{ value: '4', label: 'Quinta-feira' },
							{ value: '5', label: 'Sexta-feira' },
							{ value: '6', label: 'Sabado' }
						]}
					/>
					<InputComponent 
						htmlFor="time" 
						labelText="Hora" 
						type="time" 
						value={time}
						onChange={e => { setTime(e.target.value)
						}}
					/>

				{ 	<button type="submit">enviar</button> }
				</Form>
				<Main className="main">

					{
						teachers.map( (teacher: Teacher ) => {
						return(<TeacherItem key={teacher.ID} teacher={teacher}/>)
					})}
				
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherList;
