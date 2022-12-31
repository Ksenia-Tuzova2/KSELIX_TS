import FriendsStyle from './friends.module.scss'
import React, { Dispatch } from 'redux'
import Friend from './friend/friend'
import { connect } from 'react-redux'
import { Friends } from './friends'

type mapStateToPropsType={

}

type mapDiapatchToPropsType={

}


const mapDiapatchToProps=(dispatch:Dispatch)=>{
    return{

    }
}

const mapStateToProps=(dispatch:Dispatch)=>{
    return{

    }
}
export const friendsContainer=connect(mapDiapatchToProps, mapStateToProps)(Friends)


