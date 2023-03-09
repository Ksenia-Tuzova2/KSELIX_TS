import React from "react"
import { searchUserMapWindowContainerType } from "./searchUserContainer"
import { SearchUsersC } from "./searchUsersC"
import { LoadingSpiner } from "../../loadingSpiner/loadingSpiner"


export class SearchUserApiC extends React.Component<searchUserMapWindowContainerType>{

  
componentDidMount(): void {
    this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage)
    
  }


  render() {

    const pageButtonOnClickHandler = (currentPage: number) => {
      this.props.getUsersThunkCreator(this.props.pageSize, currentPage)
    }

    const showDownload = () => {
      if (this.props.isFetching === true) {
        return <LoadingSpiner />
      } else return <></>
    }



    return (
      <div>
        {showDownload()}
        <SearchUsersC
          pageButtonOnClickHandler={pageButtonOnClickHandler}
          items={this.props.items}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage} 
          followingInProgress={this.props.followingInProgress}/>

      </div>
    )
  }

}