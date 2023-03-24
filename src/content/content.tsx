import { Routes, Route } from 'react-router-dom'
import contentStyle from './content.module.scss'
import MenuBar from './menu-bar/menu-bar';
import { Dialogs } from './dialogs/dialogs'
import { Friends } from './friends/friends'
import { NewsFeedContainer } from './newsfeed/newsfeedContainer';
import { SearchUserContainer } from './searchUser/searchUserContainer';
import  ProfileContainer  from './profile/profileContainer';




export const Content: React.FC = () => {
	// debugger
	return (
		<div className={contentStyle.wrapper}>
			<MenuBar />
			<Routes>
				<Route path='/dialogs/*' element={<Dialogs/>} />
				<Route path='/profile' element={<ProfileContainer/>} />
				<Route path='/friends/*' element={<Friends />} />
				<Route path='/news/*'
					element={<NewsFeedContainer/>}
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

