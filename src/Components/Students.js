import React, { Component } from 'react';
import Axios from 'axios';
import "./Students.css";

 

function _handleKeyDown(e) {
    if (e.key === 'Enter') {
        //alert(e.currentTarget.value);
      console.log(e.currentTarget.attributes['email'].value);
      var email = e.currentTarget.attributes['email'].value;
      if(e.currentTarget.value.toLowerCase() != ""){
      if(localStorage.getItem(email)){
          var cTags = localStorage.getItem(email);
          //appended a tag with a comma in front of it
          cTags = cTags + `,${e.currentTarget.value.toLowerCase()}`; 
          localStorage.setItem(email, cTags);
          alert(`Tags added => ${cTags}`);
          document.getElementById(`${email}tagsDisplay`).innerHTML = cTags;

          //why are there 2 sass, there is a processor -- pre-processor 
      } else {
          localStorage.setItem(email, e.currentTarget.value);
          alert(`Tag added => ${e.currentTarget.value.toLowerCase()}`);
          document.getElementById(`${email}tagsDisplay`).innerHTML = e.currentTarget.value.toLowerCase() ;
      }
    } else {
        alert("Tag can't be an empty string.");
    }
    e.currentTarget.value = "" ;
    }
  }

function StudentCard(props){
    
    return (
        <div className="container" style={{width:'70%', margin:'0px', borderRadius:'0px', backgroundColor:'white', borderBottom:'1px solid silver'}}>
            <div className="row">
            <div className="col-sm-4">
                <br/> 
                <img className="avatar" src={props.imgUrl}></img>
            </div>
            <div className="col-sm-6" align="left">
                <br/>
                <h3><b>{props.firstName +" "+ props.lastName}</b></h3>

                Email : {props.email}<br/>
                Company : {props.company}<br/>
                Skill : {props.skill}<br/>
                Average : {props.average}<br/><br/>
                <div className="row" id={`${props.email}extension`} className="extensions" style={{display:'none'}}>
                    <div className="col-sm-12">
                <table>
                    {
                        props.grades.map((grade,i)=>
                            <tr>
                                <td align="left">Test {i+1}</td>
                                <td style={{opacity:0}}>________</td>
                                <td align="right">{grade}</td>
                            </tr>
                        )
                    }
                </table>
                
                 
                <input onKeyDown={_handleKeyDown} email={props.email} type="text" placeholder="Add a tag" id={`${props.email}tags`} style={{display:'block'}}></input>
                <br/>
                </div>
                </div>
                 
                <div className="row" align="left">
                { props.email != "" ?
                <div className="col-sm-2" style={{borderRadius:'5px',padding:'5px',border:'0px solid black'}}>Tags : </div> : ""}
                { props.email != "" ?
                <div className="col-sm-9" id={`${props.email}tagsDisplay`} style={{paddingLeft:'10px',overflow:'scroll',borderRadius:'5px',paddingTop:'5px',paddingBottom:'5px',border:'0px solid black',backgroundColor:'antiquewhite'}}>
                 {localStorage.getItem(props.email) ? localStorage.getItem(props.email) : "Expand the card and add tags."}
                </div> : ""
}
            </div>
            </div>

            <div className="col-sm-2" align="center">
                <br/>
                { props.email != "" ?
                <button id={`${props.email}button`} onClick={()=>{
                    if(document.getElementById(`${props.email}button`).innerHTML == " + "){
                        document.getElementById(`${props.email}button`).innerHTML = " - ";
                        document.getElementById(`${props.email}extension`).style.display = "block";
                    } else {
                        document.getElementById(`${props.email}button`).innerHTML = " + ";
                        document.getElementById(`${props.email}extension`).style.display = "none";
                    }
                }} > + </button> : "" }
            </div>
           
            </div>
            <br/>
           
           
        </div>
    )
}

class Students extends Component {

    state = {
        searchData : [],
        studentsData : []
    }

    componentDidMount(){
        Axios
        .get(
            'https://www.hatchways.io/api/assessment/students'
        ).then((res)=>{
            //console.log(res);
            this.setState({searchData : res.data.students, studentsData : res.data.students});
        }).then(()=>{
            document.getElementById('homeLoader').style.display = 'none';
        })
    }
    render() {
        return (
            <div>
                { 
                  this.state.searchData.length !=0 ?
                  <div>
                      <input onKeyUp={()=>{
                        var name = document.getElementById("search_by_name").value.toUpperCase();
                        //console.log(name.trim());
                        if(name != ""){
                        var searchResults = [];
                        this.state.studentsData.map((element)=>{
                            var fullName = element.firstName.toUpperCase() + element.lastName.toUpperCase();
                            console.log(fullName);
                            if(fullName.search(name.replace(/\s/g, "")) != -1){
                                searchResults.push(element);
                            }
                        })
                        if(searchResults.length == 0) {
                            var dummyStudent = {
                                firstName : "No results found !" ,
                                grades : [],
                                pic : "",
                                lastName : "",
                                company : "",
                                email : "",
                                skill : ""
                            }
                            var dummyArray = [];
                            dummyArray.push(dummyStudent);
                            this.setState({searchData:dummyArray});
                            //alert("No results found");
                        } else {
                        this.setState({searchData:searchResults});
                        }
                    }
                        else {
                            this.setState({searchData:this.state.studentsData});
                        }
                      }} type="text" id="search_by_name" placeholder=" Search by name ..." style={{borderBottom:'2px solid silver', width:'70%',borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}}></input><br/>
                     
                      <input onKeyUp={()=>{
                        var tag = document.getElementById("search_by_tag").value.toLowerCase();
                        //console.log(name.trim());
                        if(tag != ""){
                        var searchResults = [];
                        //var emails = [];
                        this.state.studentsData.map((element)=>{
                            var fullName = element.firstName.toUpperCase() + element.lastName.toUpperCase();
                            console.log(fullName);
                            // searchResults.push(element);
                            // emails.push(element.email);
                            if(localStorage.getItem(element.email)){
                            var tagsString = localStorage.getItem(element.email);
                            var tagsArray = tagsString.split(",");
                           // console.log(tagsArray[0]);
                            if(tagsArray.indexOf(tag) != -1){
                                searchResults.push(element);
                            }
                        }
                        })
                        if(searchResults.length == 0) {
                            var dummyStudent = {
                                firstName : "No results found !" ,
                                grades : [],
                                pic : "",
                                lastName : "",
                                company : "",
                                email : "",
                                skill : ""
                            }
                            var dummyArray = [];
                            dummyArray.push(dummyStudent);
                            this.setState({searchData:dummyArray});
                            //alert("No results found");
                        } else {
                        this.setState({searchData:searchResults});
                        }
                    } else {
                        this.setState({searchData:this.state.studentsData});
                    }
                      }}
                      
                      type="text" id="search_by_tag" placeholder=" Search by tag ..." style={{borderBottom:'2px solid silver',width:'70%'}}></input>
                  </div>
                  :
                  ""   
                }
            <div align="center" style={{height:'80vh', overflow:'scroll'}}>
                {/*loader*/}
                <div class="loader" id="homeLoader" style={{display:'block'}}></div>
                
                {
                     this.state.searchData.map((element) => {
                        
                        var cal=0;
                        var avg = avg+element.grades.map(grade =>{
                            cal = cal+parseInt(grade, 10);
                            console.log(grade);
                        });
                        console.log(cal);
                        var perc=cal/element.grades.length+"%";
                        console.log(perc);
                       return (
                        
                       <StudentCard imgUrl={element.pic} grades={element.grades} firstName={element.firstName.toUpperCase()} lastName={element.lastName.toUpperCase()} company={element.company} email={element.email} skill={element.skill} average={perc}></StudentCard>
                     
                       )
                    }
                        ) 
                }
            </div>
            </div>
        );
    }
}

export default Students;