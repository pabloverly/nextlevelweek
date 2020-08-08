import React, {useState, useContext, FormEvent} from 'react';
import {useHistory} from 'react-router-dom'

import Header from '../../Components/Header';
import { TeacherListContent, Main, FieldSet, Box, Footer } from './styles';
import InputComponent from '../../Components/InputComponent';
import { TiWarning } from 'react-icons/ti';
import TextAreaComponent from '../../Components/TextAreaComponent';
import SelectComponent from '../../Components/SelectComponent';
import {MdRemoveCircle} from 'react-icons/md'
import api from '../../services/api';
interface Props {
	toggleTheme(): void;
}

const TeacherForm: React.FC<Props> = ({ toggleTheme }) => {
	const history = useHistory()

	const [name,setName] = useState('');
	const [avatar,setAvatar] = useState('');
	const [whatsapp,setWattsapp] = useState('');
	const [bio,setBio] = useState('');

	const [subject,setSubject] = useState('');
	const [cost,setCost] = useState('');


	const [scheduleItems, setScheduleItems] = useState([{week_day:0, from:'', to:''}]);
	
	const addNewScheduleItem = ()=>{
		setScheduleItems([...scheduleItems, {week_day:0, from:'', to:''}])
	}
	const removeScheduleItem = (idx: Number)=>{
		setScheduleItems(scheduleItems.filter((_, index)=>(index!=idx)))
	}
	const handClient = (e: FormEvent) =>{
		e.preventDefault()
		
		api.post('classes',{
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			scheduleItems
		}).then(() =>{
			alert('Cadatrado')
			history.push('/')
		})

		console.log({
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			scheduleItems
		})
	}

	const setScheduleItemsValue = (possition: number, field: string, value: string) =>{
		const newArray = scheduleItems.map((scheduleItems, index) =>{
			if(index === possition){
				return { ...scheduleItems, [field]: value}
			}
			return scheduleItems
		})
		setScheduleItems(newArray)
	}
	return (
		<div className="container">
			<TeacherListContent>
				<Header
					mainText="Que incrível que você quer ser um Proffy."
					subText="Preencha o formulário abaixo para começar a sua história como proffy!"
					toggleTheme={toggleTheme}
				/>
				<Main className="main">
					<Box>
						<form onSubmit={handClient}>
						<div className="form-container">
						<FieldSet>
							<legend className="legend-field-set">Meus dados</legend>
							<InputComponent 
								labelText="Nome" 
								htmlFor="name" 
								boxClass="input-inside-box" 
								value={name} 
								onChange={(e) => {setName(e.target.value)}}
							/>
							<InputComponent 
								labelText="Avatar" 
								htmlFor="avatar" 
								boxClass="input-inside-box" 
								value={avatar} 
								onChange={(e) => {setAvatar(e.target.value)}}
							/>
							<InputComponent 
								labelText="WhatsApp" 
								htmlFor="WhatsApp" 
								boxClass="input-inside-box" 
								value={whatsapp} 
								onChange={(e) => {setWattsapp(e.target.value)}}
							/>
							<InputComponent 
								labelText="bio" 
								htmlFor="Biografia" 
								boxClass="input-inside-box" 
								value={bio} 
								onChange={(e) => {setBio(e.target.value)}}
							/>
							
						</FieldSet>
						<FieldSet>
							<legend className="legend-field-set">Sobre a aula</legend>
							<SelectComponent
								labelText="Disciplina"
								htmlFor="subject"
								boxClass="input-inside-box"
								value={subject}
								onChange={(e)=>{setSubject(e.target.value)}}
								options={[
									{ value: 'ARTES', label: 'ARTES' },
									{ value: 'BIOLOGIA', label: 'BIOLOGIA' },
									{ value: 'CIENCIAS', label: 'CIENCIAS' },
									{ value: 'QUIMICA', label: 'QUIMICA' },
									{ value: 'FILOSOFIA', label: 'FILOSOFIA' },
									{ value: 'GEOGRAFIA', label: 'GEOGRAFIA' }
								]}
							/>
								<InputComponent 
								labelText="bio" 
								htmlFor="cost" 
								boxClass="input-inside-box" 
								value={bio} 
								onChange={(e) => {setBio(e.target.value)}}
							/>
							
						</FieldSet>
						<FieldSet>
							<legend className="legend-field-set">
								Horários disponíveis <button type="button" onClick={()=>addNewScheduleItem()}>+ Novo horário</button>
							</legend>

							{scheduleItems.map((item,idx)=>(
								<div key={item.week_day} className="schedule-item">
								<SelectComponent
									labelText="Dia da semana"
									htmlFor="week_day"
									boxClass="input-inside-box"
									value={item.week_day}
									onChange={e => setScheduleItemsValue(idx,'week_day',e.target.value)}

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
									htmlFor="from" 
									labelText="Das" 
									type="time" 
									boxClass="input-inside-box"
									value={item.from}
									onChange={e => setScheduleItemsValue(idx,'from',e.target.value)}
								/>
								<InputComponent 
									htmlFor="to" 
									labelText="Até" 
									type="time" 
									boxClass="input-inside-box"
									value={item.to}
									onChange={e => setScheduleItemsValue(idx,'to',e.target.value)}
								/>
								{idx!=0 && <MdRemoveCircle color="#F54E4E" size={36} onClick={()=>removeScheduleItem(idx)}/>}
							</div>
							))}
							<InputComponent 
								labelText="Custo da sua hora por aula"
								htmlFor="cost"
								boxClass="input-inside-box"
								value={cost}
								onChange={(e) => {setCost(e.target.value)}}
							/>
						</FieldSet>
						</div>
						<Footer>
							<p>
								<TiWarning size={24} color="#FFD347" />
								Importante! <br />
								Preencha todos os dados
							</p>
							<button type="submit" className="create-class">
								Salvar cadastro
							</button>
						</Footer>
						</form>
					</Box>
				</Main>
			</TeacherListContent>
		</div>
	);
};
export default TeacherForm;
