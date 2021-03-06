import React, { Component } from 'react'
import List from './List'
import axios from 'axios'

export default class Tags extends Component {
    state = {
        dataList: []
    }
    
    componentDidMount () {
        axios.get(`http://api.yolandy.com/api/articles?tag=${ this.props.history.location.pathname.split('/')[2] }`)
        .then( res => {
            this.setState({ 
                dataList: res.data
            })
        })
    }
    
    UNSAFE_componentWillReceiveProps () {
        axios.get(`http://api.yolandy.com/api/articles?tag=${ this.props.history.location.pathname.split('/')[2] }`)
        .then( res => {
            this.setState({ 
                dataList: res.data
            })
        })
    }

    render() {
        return  <List articalList={ this.state.dataList } {...this.props}></List>      
    }
}