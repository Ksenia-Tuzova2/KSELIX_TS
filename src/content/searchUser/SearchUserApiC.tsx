import axios from "axios"
import React from "react"
import { searchUserMapWindowContainerType } from "./searchUserContainer"
import { SearchUsersC } from "./searchUsersC"

export class SearchUserApiC extends React.Component<searchUserMapWindowContainerType>{

  componentDidMount(): void {
    //обратные кавычки для того чтобы записать квери параметр с переменной
    //квери параметры идут после вопросительного знака и записываются после амперсанта
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((Response: any) => {
      this.props.setUser(Response.data)
    }).catch((error) => {
      // handle error
      console.log(error);
    }
    )
  }


  render() {

    const pageButtonOnClickHandler = (currentPage: number) => {

      this.props.setCurrentPage(currentPage)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((Response: any) => {
        // debugger
        this.props.setUser(Response.data)
        this.props.setTotalCount(Response.data.totalCount)
      }).catch(
        (error: string) => {
          // handle error
          console.log(error);
        }
      )
    }

    return (
      <SearchUsersC
        pageButtonOnClickHandler={pageButtonOnClickHandler}
        items={this.props.items}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage} />
    )
  }

}


