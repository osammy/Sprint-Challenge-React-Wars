import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const PageLoader = () => (
  <div className="page-loader">
    <Segment>
      <Dimmer active inverted>
        <Loader color="white" inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default PageLoader