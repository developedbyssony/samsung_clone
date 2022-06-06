/*
import React, { Component } from "react";
import axios from "axios"; 

class myUpdate extends Component {
    state = { 
        loading: false,
        ItemList: []
     };

     loadItem = async () => {
       axios
         .get("./SearchJson.json")
         .then(({ data }) => {
           this.setState({ 
             loading: true,
             ItemList: data.Item
           });
         })
         .catch(e => {  // API 호출이 실패한 경우
           console.error(e);  // 에러표시
           this.setState({  
             loading: false
           });
         });

         render() {
            const { ItemList } = this.state;
            console.log(ItemList);
         }
       }
     }

export default myUpdate;
*/