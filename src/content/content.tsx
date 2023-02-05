import { Routes, Route } from 'react-router-dom'
import contentStyle from './content.module.scss'
import MenuBar from './menu-bar/menu-bar';
import { Dialogs } from './dialogs/dialogs'
import { Friends } from './friends/friends'
import { NewsFeedContainer } from './newsfeed/newsfeedContainer';
import { SearchUserContainer } from './searchUser/searchUserContainer';
import  ProfileContainer  from './profile/profileContainer';



type ContentPropsType = {
	// appState: RootState, 
	// dispatch:(action:any)=>any
}

export const Content: React.FC<ContentPropsType> = ({
	//  appState, dispatch
}) => {
	// debugger
	return (
		<div className={contentStyle.wrapper}>
			<MenuBar />
			<Routes>
				<Route path='/dialogs/*' element={<Dialogs
				//  Massage={appState.messegeReducer} dispatch={dispatch}
				/>} />
				<Route path='/profile' element={<ProfileContainer
				// messageData={appState.profileReducer.messageData} newPostText={appState.profileReducer.newPostText}   dispatch={dispatch}
				/>} />
				<Route path='/friends/*' element={<Friends />} />
				<Route path='/news/*'
					element={<NewsFeedContainer
					// messageData={appState.profileReducer.messageData} dispatch={dispatch}
					/>}
				/>
				<Route path='SearchUserContainer'
					element={<SearchUserContainer/>	}
				/>
				{/* как сюда передать айди и все необходимое для отрисовки нового профиля? */}
				<Route path={'/profile/:userId'}
					element={<ProfileContainer/>	}
				/>
			</Routes>
			
		</div>

	);
}

