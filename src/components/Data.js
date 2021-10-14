import React, { useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Data() {
    const [data,setData] = useState([]);
    useEffect(() => {
     let storedData = JSON.parse(localStorage.getItem('Data'));
     setData(storedData)
    }, [])

    return (
        <section className="databacks">

            <div className="py-5">
                <h2>Business Triangle Results Page</h2>
            </div>

            <Container className="pt-5">
                <Row>
                    <Col xs={3}>
                        <div className="innerdata">
                            {/* {
                            data && data.map((val,i)=>{
                                    return <label key={i}>
                                        <div className='p-3 d-block'><input name="storeddata" type="radio" value={val.name}/>{val.name}</div>
                                    </label>
                                })
                            } */}
                       
                        
                        {
                            data && data.map((val,i)=>{ return <div class="radio" key={i}>
                                <input id={val.name} name="storeddata" type="radio" value={val.name} />
                                <label for={val.name} class="radio-label">{val.name}</label>
                            </div> })
                        }
                     </div>
                    </Col>
                    <Col xs={6}>
                        <div>
                            <img src="img/tryangle.png"/>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="boluite">
                            <ul>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                            </ul>
                        </div>

                        <div className="boluite mt-5">
                            <ul>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                                <li>XXXXXXXXXXXXXXXX</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>        
            
        </section>
    )
}
