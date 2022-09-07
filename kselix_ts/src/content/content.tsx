import { Routes, Route } from 'react-router-dom'
import ContentStyle from './content.module.scss'
import MenuBar from './menu-bar/menu-bar';
import { Dialogs } from './dialogs/dialogs'
import { Profile } from './profile/profile'
import { Friends } from './friends/friends'
import { NewsFeed } from './news/newsfeed'
import { AppPropsType } from '../App';



export const Content: React.FC<AppPropsType> = ({ appState, addMassage, addPost, updateNewPostText, updateMesText}) => {
	// debugger
	return (
		<div className={ContentStyle.wrapper}>
			<MenuBar />
				<Routes>
				<Route path='/dialogs/*' element={<Dialogs  Massage={appState.Massage} addMassage={addMassage} updateMesText={updateMesText}/> } />
				<Route path='/profile/*' element={<Profile massageData={appState.Profile.massageData} newPostText={appState.Profile.newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
					<Route path='/friends/*' element={<Friends />} />
					<Route path='/news/*' element={<NewsFeed massageData={appState.Profile.massageData} />} />
				</Routes>
		</div>

	);
}

