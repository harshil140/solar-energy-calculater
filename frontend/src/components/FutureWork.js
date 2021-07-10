import React from 'react'
import { Container,Row } from 'react-bootstrap'
const FutureWork = () => {
    return (
        <div>
        <Container id='future-work'>
      <h1>Future Work</h1>
      <h3>Solar Power Forecasting :- </h3>
     <p> It is the process of gathering and analyzing data in order to predict solar power
        generation on various time horizons with the goal to mitigate the impact of solar intermittency. Solar
        power forecasts are used for efficient management of the electric grid and for power trading.
        As major barriers to solar energy implementation, such as materials cost and low conversion efficiency,
        continue to fall, issues of intermittency and reliability have come to the fore. The intermittency issue has
        been successfully addressed and mitigated by solar forecasting in many cases.</p>
      <Container>
        <Row>
         
          <img alt='fullPlot' src = '/assets/FullPlot.jpg'></img>
         
        </Row>
        <Row>
         
          <img alt='fullPlot' src = '/assets/24hPlot.jpg'></img>
         
        </Row>
      </Container>
        </Container>
        <Container id='arrow'>
          <a href='#about-us'><p>Next <img src='/assets/arrow.png' alt='arrow'></img></p></a>
        </Container>
      </div>
    )
}

export default FutureWork
