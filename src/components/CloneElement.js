import React, { useState , useEffect} from 'react'
import {toast} from 'react-toastify';
import {Container, Row, Col} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
export default function CloneElement() {
    let history = useHistory();
    const [isItemList,setItemList] = useState([{name:''}]);
    let [error,setErrorMsg] = useState([])
    let handleChange = (e,index)=>{
       // setErrorMsg(true)
        const { name, value } = e.target;
        console.log(value);
     
        const list = [...isItemList];
        list[index][name] = value;
        let errors = [];
        // if(value != ''){
        //     let errors = [];
        //     errors[index]=false;
        //     setErrorMsg(errors)
        // }else{
        //     let errors = [];
        //     errors[index]=true;
        //     setErrorMsg(errors)
        // }
        list.forEach((item,i)=>{
            console.log(item)
            if(item.name === ''){
               //setErrorMsg(true);
               errors[i]=true
            }else{
                errors[i]=false
            }
        })
       setErrorMsg(errors)
        setItemList(list);
    }

    let handleAddElement = ()=>{
        setItemList([...isItemList, { name: ""}]);
    }

    const handleRemoveClick = index => {
        const list = [...isItemList];
        list.splice(index, 1);
        setItemList(list);
      };
    
      let submitData = ()=>{
       
          console.log(JSON.stringify(isItemList))

          let errors=[]
          isItemList.forEach((val,i)=>{
            if(isItemList[i].name===''){
                //setErrorMsg(true);       
                errors[i]=true;
            }
            if(isItemList[i].name!==''){
                errors[i]=false;
                localStorage.setItem("Data",JSON.stringify(isItemList)); 
            }
          })
          
          setErrorMsg(errors)
          //console.log(errors);
          const allEqual = arr => arr.every( v => v === false );
          let isValid = allEqual(errors)
          if(isValid){
            history.push('/data')
        }
      }

    return (
        <>
        <section className="backgroundimg">
            <Container>
                <Row>
                    <Col xs={6}>
                        <div className="maindivs">
                            {
                                isItemList.map((x,i)=>{
                                    return(
                                        <div key={i} className="inputforms">
                                            <div className="commen">
                                                <input type="text" name="name" onChange={e=>handleChange(e,i)} value={x.name}/>
                                                {isItemList.length !== 1 && <button onClick={()=>handleRemoveClick(i)} className="removebtn">Remove</button>}
                                                {isItemList.length - 1 === i && <button onClick={handleAddElement}>Add</button>}
                                            </div>
                                            
                                            
                                            { error[i] &&  <p className="text-danger mt-2 requierd">This field is required..</p>}
                                            
                                        </div>
                                    )
                                })
                            }
                            <div className="nextbtn">
                            <button onClick={submitData}>Next</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <img src="img/abc.png"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
</>
    )
}
