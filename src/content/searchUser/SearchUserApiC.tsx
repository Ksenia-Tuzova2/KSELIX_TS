import axios from "axios"
import React from "react"
import { searchUserMapWindowContainerType } from "./searchUserContainer"
import { SearchUsersC } from "./searchUsersC"
import { LoadingSpiner } from "../../loadingSpiner/loadingSpiner"
import { searchUserApi } from "../../api/searchUserApi"

export class SearchUserApiC extends React.Component<searchUserMapWindowContainerType>{

  componentDidMount(): void {
    //обратные кавычки для того чтобы записать квери параметр с переменной
    //квери параметры идут после вопросительного знака и записываются после амперсанта
    this.props.setFetching(true)
    
    searchUserApi.getUsersRequest(this.props.pageSize,this.props.currentPage).then((data: any) => {
      this.props.setFetching(false)
      this.props.setUser(data)
    }).catch((error) => {
      // handle error
      console.log(error);
    }
    )
  }


  render() {

    const pageButtonOnClickHandler = (currentPage: number) => {
      this.props.setFetching(true)
      this.props.setCurrentPage(currentPage)
      searchUserApi.getUsersRequest(this.props.pageSize,this.props.currentPage).then((data: any) => {
        // debugger
        this.props.setFetching(false)
        this.props.setUser(data)
        this.props.setTotalCount(data.totalCount)
      }).catch(
        (error: string) => {
          // handle error
          console.log(error);
        }
      )
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
          currentPage={this.props.currentPage} />
      </div>
    )
  }

}