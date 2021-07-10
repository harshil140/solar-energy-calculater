import React from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const AboutProject = () => {
    return (
        <div>
          <Container id='about-project'>
        <h1>About Project</h1>
        <h3>What is Renewable Energy?</h3>
        <p>Renewable energy, often referred to as clean energy, comes from natural sources or processes that are constantly replenished. For example, sunlight or wind keep shining and blowing, even if their availability depends on time and weather.
        This type of energy source stands in contrast to fossil fuels, which are being used far more quickly than they are being replenished. Although most renewable energy is sustainable energy, some is not, for example some biomass is unsustainable.
        Renewable energy often provides energy in four important areas: electricity generation, air and water heating/cooling, transportation, and rural (off-grid) energy services.
        </p>
        {/* <Container>
          <Row>
            <Col>
            <img id='side-images' src='/assets/main-img.jpg' alt='sideImages'></img>
            </Col>
            <Col>
            <img id='side-images' src='/assets/main-img.jpg' alt='sideImages'></img>
            </Col>
          </Row>
        </Container> */}
        <br></br>
        <Container>
          <Row>
            <Col>
            
           <h5>Advantages of Renewable Energy</h5>
          <ul>
            <li>A Fuel Supply That Never Runs Out</li>
            <li>Zero Carbon Emissions</li>
            <li>Cleaner Air and Water</li>
            <li>A Cheaper Form of Electricity</li>
          </ul>
            </Col>
            <Col>
            
           <h5>Disadvantages of Renewable Energy</h5>
          <ul>
            <li>Higher Capital Costs</li>
            <li>Electricity Production Can Be Unreliable</li>
            <li>Energy Storage Is a Challenge.</li>
          </ul>
            </Col>
          </Row>

        </Container>
        
        <br></br>
    
        <h3>What is Solar Energy?</h3>
       <p> Solar power is energy from the sun that is converted into thermal or electrical energy. It is the cleanest and most abundant renewable energy source available. 
         Solar technologies can harness this energy for a variety of uses, including generating electricity, 
         providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.</p>
         <br></br>
        <Container>
          <Row>
            <Col  md={3}>
            <div id='stats'> 16% </div>
            <div id='stats-line'> Solar Photovoltaics Overall Global Consumption</div>
            </Col>
            <Col  md={3}>
            <div id='stats'>60.40 TWh </div>
            <div id='stats-line'>Annual Solar Power Generation In 2020-21</div>
            </Col>
            <Col md={3}>
            <div id='stats'>10 KWh</div>
            <div id='stats-line'>Electricity per square foot. is produced by Solar panels</div>
            </Col>
            <Col md={3}>
            <div id='stats'>₹ 5,500 </div>
            <div id='stats-line'>Saved monthly with the installation of a 5 kW rooftop solar system</div>
            </Col>
          </Row>
        </Container>

        <h3>What is Net Metering?</h3>
       <p> Net metering is a mechanism which allows domestic or commercial users who generate their own electricity using solar panels or photovoltaic systems to export their surplus energy back to the grid.
          The process of net metering provides system owners with the opportunity to gain extra revenue by selling their excess power to the grid while also making up for shortfalls via the grid. If the amount of energy generated is more than the amount of energy consumed, then the owner gets compensated for the excess amount. 
        </p>
         <br></br>

         <h3>Method of BILLING</h3>
       <p>In net metering, the owner is billed for the “net” energy that is used, which is the difference between total energy produced by the system and total energy consumed. Net metering accounts the difference of excess power exported back to the grid and total power consumed by the owner. Hence, surplus energy earns revenue while the shortage of energy is covered by the grid. 
        </p>
         <br></br>
         Unlike off-grid PV systems, owners don’t require battery storage systems while using net metering since the extra power is stored by the utility grid itself. It also eliminates the need for exorbitant generators since the electricity grid also acts as a backup generator.
         <br></br>

      <Container id='calculate-button'>
       <Link to='/calculate'><Button>CALCULATE YOUR BILL</Button></Link>
      </Container>


          </Container>
          <Container id='arrow'>
            <a href='#future-work'><p>Next <img src='/assets/arrow.png' alt='arrow'></img></p></a>
          </Container>
        </div>
    )
}

export default AboutProject
