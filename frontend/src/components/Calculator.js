import {React,useState} from 'react'
import { Container } from 'reactstrap'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import { Radio, RadioGroup} from 'react-radio-group'
import { Modal} from 'react-bootstrap';  

const Calculator = () => {
  const [tariff,setTariff]=useState('')
  const [type,setType]=useState('')
  const [provider,setProvider]=useState('')
  const [previousBillAmount,setPreviousBillAmount]=useState('')
  const [pastImportUnits,setPastImportUnits]=useState('')
  const [pastExportUnits,setPastExportUnits]=useState('')
  const [presentImportUnits,setPresentImportUnits]=useState('')
  const [presentExportUnits,setPresentExportUnits]=useState('')
  const [bill,setBill]=useState({})
  const [pastReading, setPastReading] = useState(false);
  const [presentReading, setPresentReading] = useState(false);
  
 
  const torrentTariff = {
    fixedChargePerMonth:25,
    firstFiftyUnits : 3.20,
    nextFiftyUnits : 3.90,
    remaining : 4.90,
    govtDuty:15
   }


const handlePastReadingClose = () => setPastReading(false);
const handlePastReadingShow = () => setPastReading(true);


const handlePresentReadingClose = () => setPresentReading(false);
const handlePresentReadingShow = () => setPresentReading(true); 
   

const submitHandler =(e)=>{
  
    e.preventDefault()
   const result = torrentCalculator()
   setBill(result)
   console.log(result)
  }

//This is the Solar Bill Calculator of Torrent Discom

  const torrentCalculator = () =>{
    let result = {}
    let netUnitsImported = presentImportUnits - pastImportUnits
    let netUnitsExported = presentExportUnits - pastExportUnits
    if(netUnitsImported>netUnitsExported)
     {
     let netUnits = netUnitsImported -netUnitsExported
        result.fixedCharge = 2* torrentTariff.fixedChargePerMonth
        if(netUnits<50){
          result.energyCharge = netUnits * 3.20
        }
        if(netUnits<150 && netUnits>50){
          result.energyCharge = (50 * 3.20) + ((netUnits-50) * 3.90)
        }
        if(netUnits>150){
          result.energyCharge = (50 * 3.20) + (150*3.90) + ((netUnits-200)*4.90)
        }
        result.cred = 0 
    
      }
    else  {
    result.fixedCharge = 2* torrentTariff.fixedChargePerMonth
    result.energyCharge = 0
    result.cred = (netUnitsExported-netUnitsImported)*2.25 
    }

    result.amountWithoutDuty =   result.fixedCharge+result.energyCharge
    result.govtDuty = (15* result.amountWithoutDuty)/100
    result.withDuty = result.amountWithoutDuty +result.govtDuty

    result.totalAmountThisMonth =  (result.amountWithoutDuty+ result.govtDuty) - result.cred

    if(type==='Due'){
      result.previousDues = previousBillAmount
      result.totalAmountThisMonth =  (result.amountWithoutDuty+ result.govtDuty) - result.cred - previousBillAmount
    }
    
    return result
  }

  //

const form = () =>{
    return(
        
      <Container id='form-cont'>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
          <FormGroup controlId="tariff">
             <FormLabel>Tariff</FormLabel>
             <FormControl as="select" value={tariff}
              onChange={(e)=>setTariff(e.target.value)}>
               <option>Residential</option>
               {/* <option>Industrial</option> */}
  
            </FormControl>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup controlId="provider">
             <FormLabel>Discom Provider</FormLabel>
             <FormControl as="select" value={provider}
              onChange={(e)=>setProvider(e.target.value)}>
               {/* <option>PGVCL</option>
               <option>UGVCL</option>
               <option>MGVCL</option>
               <option>DGVCL</option>
               <option>MGVCL</option> */}
               <option>Torrent</option>
            </FormControl>
            </FormGroup>
          </Col>             
          <Col md={6}>
            <FormGroup controlId="previousBill">
             <FormLabel>Previos Bill Amount</FormLabel>
             <FormControl type="text" value={previousBillAmount}
              onChange={(e)=>setPreviousBillAmount(e.target.value)}/>
            </FormGroup>
          </Col>
  
          <Col md={12}>
          <RadioGroup id='radio-group' name="fruits" onChange={(e) => setType(e)}>
              <Radio value="Credited" className="radio-button" />Credited
              <Radio value="Due" id='radio' />Due
          </RadioGroup>
          </Col>
          <Col md={12}>
            <p><b>Previous Bill Reading :-</b> &ensp;<i onClick={handlePastReadingShow} className='fa fa-question-circle'></i></p>
          </Col>
          <Col md={6}>
            <FormGroup controlId="pastImport">
             <FormLabel>Import Units &ensp;</FormLabel>
             
              <FormControl type="text" value={pastImportUnits}
              onChange={(e)=>setPastImportUnits(e.target.value)}/>
            </FormGroup>
          </Col>
  
          <Col md={6}>
            <FormGroup controlId="pastExpoort">
             <FormLabel>Export Units </FormLabel>
          
             <FormControl  type="text" value={pastExportUnits}
              onChange={(e)=>setPastExportUnits(e.target.value)}>
             </FormControl>
            </FormGroup>
          </Col>
  
          <Col md={12}>
            <p><b>Present Meter Reading:-</b> &ensp; <i onClick={handlePresentReadingShow} className='fa fa-question-circle'></i></p>
          </Col>
          <Col md={6}>
            <FormGroup controlId="presentImport">
             <FormLabel>Import Units  &ensp;</FormLabel>
             <FormControl type="text" value={presentImportUnits}
              onChange={(e)=>setPresentImportUnits(e.target.value)}/>
            </FormGroup>
          </Col>
  
          <Col md={6}>
            <FormGroup controlId="presentExport">
             <FormLabel>Export Units  &ensp;</FormLabel>
            
             <FormControl type="text" value={presentExportUnits}
              onChange={(e)=>setPresentExportUnits(e.target.value)}>
             </FormControl>
            </FormGroup>
          </Col>
           <Col md={12}>
          <Button type='submit'>Calculate</Button>
          </Col>
        </Row>
       </Form>
        </Container>   
  
    )
  }

  const BillDetail = () =>{
    return(
      <div>   
         <Container className='d-none d-lg-block d-xl-none d-xl-block' id='meter-cont'>
         <h3>METER DETAILS</h3>
         <Row id='bill-row'>
          <Col id='center-col' md={3}><b>Meter</b></Col>
          <Col id='center-col' md={3}><b>Present Reading</b></Col>
          <Col id='center-col' md={3}><b>Past Reading</b></Col>
          <Col id='center-col' md={3}><b>Units Registered</b></Col>
        </Row>
        <Row id='bill-row'>
          <Col id='center-col' md={3}> <b> &#40;A&#41; Import </b></Col>
          <Col id='center-col' md={3}>{presentImportUnits}</Col>
          <Col id='center-col' md={3}>{pastImportUnits}</Col>
          <Col id='center-col' md={3}>{presentImportUnits - pastImportUnits}</Col>
        </Row>

        <Row id='bill-row'>
          <Col id='center-col' md={3}> <b> &#40;A&#41; Export </b></Col>
          <Col id='center-col' md={3}>{presentExportUnits}</Col>
          <Col id='center-col' md={3}>{pastExportUnits}</Col>
          <Col id='center-col' md={3}>{presentExportUnits - pastExportUnits}</Col>
        </Row>
        <Row id='bill-row'>
          <Col id='center-col' md={3}> <b>Net Units Billed</b></Col>
          <Col id='center-col' md={3}></Col>
          <Col id='center-col' md={3}></Col>
          <Col id='center-col' md={3}>{(presentImportUnits - pastImportUnits)-(presentExportUnits - pastExportUnits)}</Col>
        </Row>
        </Container>


        <Container id='bill-cont'>
        <h3>BILL DETAILS&#40;₹&#41;</h3>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Energy Charges</Col>
          <Col id='right-col' md={2}>{bill.energyCharge}</Col>
        </Row>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Fixed Charges</Col>
          <Col id='right-col' md={2}>{bill.fixedCharge}</Col>
        </Row>
        <Row id='checkpoint-row'>
          <Col id='left-col' md={10}><b>Total Charges Without Govt. Duty</b></Col>
          <Col id='right-col' md={2}><b>{bill.amountWithoutDuty}</b></Col>
        </Row>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Govt Duty @15%</Col>
          <Col id='right-col' md={2}>{bill.govtDuty}</Col>
        </Row>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Bill Amount</Col>
          <Col id='right-col' md={2}>{bill.withDuty}</Col>
        </Row>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Previous Dues</Col>
          <Col id='right-col' md={2}>{bill.previousDues}</Col>
        </Row>
        <Row id='bill-row'>
          <Col id='left-col' md={10}>Other Debit or Credit</Col>
          <Col id='right-col' md={2}>{bill.cred}</Col>
        </Row>
        <Row id='checkpoint-row'>
          <Col id='left-col' md={10}><b>Amount Due</b></Col>
          <Col id='right-col' md={2}><b>{bill.totalAmountThisMonth}</b></Col>
        </Row>
        
        </Container>   
     <Container id='note'>
      <h6><b>PLEASE NOTE :-</b></h6>
      <p>* Credit of Rs.{bill.cred} for {} excess Solar units &#40;@ rate of Rs. 2.25&#41; adjusted as other debit/credits</p>
     </Container>
    
        </div>

    )
  }

  const PastReadingModel = () =>{
    return(
      <Modal show={pastReading} onHide={handlePastReadingClose}>
      <Modal.Header closeButton>
        <Modal.Title>About Past BILL Reading</Modal.Title>
      </Modal.Header>
      <Modal.Body>PENDING...</Modal.Body>
      <Modal.Footer>
     </Modal.Footer>
    </Modal>
    )
  }

  const PresentReadingModel = () =>{
    return(
      <Modal show={presentReading} onHide={handlePresentReadingClose}>
      <Modal.Header closeButton>
        <Modal.Title>About Present Meter Reading</Modal.Title>
      </Modal.Header>
      <Modal.Body>PENDING...</Modal.Body>
      <Modal.Footer>
     </Modal.Footer>
    </Modal>
    )
  }


    return (
        <div>
            <Container fluid id='cal-cont'>
                <h1>Solar Meter Bill Calculator</h1>
            </Container>
            <Container id='cal-cont2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper purus sed nulla consequat, quis sodales risus suscipit. 
                    Vivamus quis lorem est. Donec placerat et tellus id semper. Aenean a cursus velit. Pellentesque scelerisque libero ut velit maximus, 
                    hendrerit dictum tristique.</p>
    
            <PastReadingModel/>
            <PresentReadingModel />


            </Container>
       
          {Object.keys(bill).length===0? form() : BillDetail()}
        </div>
     )
}

export default Calculator
