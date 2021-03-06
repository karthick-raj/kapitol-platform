import React,{Component} from 'react';
import SearchBox from './searchbox';
import '../stylesheets/css/index.css';
import InputSearchService from '../services/api';


let kapitol_logo = require('../images/kapitol_logo.png');

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            placeholderText: 'Enter a member name..',
            searchType: 'member',
            inputValue: '',
            searchResults: InputSearchService.fetchSearch('members')
        }
        this.setPlaceholder = this.setPlaceholder.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

//FUNCTION TO BE FIRED ON SELECTOR CHANGE
//CHECKS TARGET VALUE AND SETS PLACEHOLDER AND SEARCH TYPE STATE
    setPlaceholder(event){
        var target = event.target.value;
        if(target === 'members'){
            this.setState({
                placeholderText: 'Enter a member name..',
                searchType: target,
                searchResults: InputSearchService.fetchSearch(target)
            })
        }else{
            this.setState({
                placeholderText: 'Enter a keyword..',
                searchType: target,
                searchResults: InputSearchService.fetchSearch(target)
            })
        }

        //CLEAR INPUT BAR
        document.getElementById('search-bar').value = '';
    }

//FUNCTION TO BE FIRED ON INPUT CHANGE
//CHECKS TARGET VALUE AND UPDATES INPUT VALUE STATE
//TO DO: WITHIN THIS FUNCTION, THROTTLE EVERY X SECONDS AND HIT API BACKEND FOR MEMBERS/LEGISLATION
    updateInputValue(event){
        //KEEP VARIABLE OF INPUT VALUE
        var target = event.target.value.toLowerCase();
        this.setState({
            inputValue: target
        })
    }



    render(){
        return(
            <div id='fp-container' className="page-mid">
                <img src={kapitol_logo} alt=""/>
                <div id="fp-search">
                    <input id='search-bar' onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                    {this.state.inputValue.length === 0 ? '': <SearchBox searchResults={this.state.searchResults} value={this.state.inputValue} searchType={this.state.searchType}/> }
                    <div id="fp-selector" className="select-style">
                        <select onChange={this.setPlaceholder} className="dropdown" name="drop-down">
                            <option value="members">Members</option>
                            <option value="legislation">Legislation</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;