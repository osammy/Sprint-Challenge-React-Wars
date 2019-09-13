import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const PaginationButtons = ({noOfContentsDisplayed,page, next,disableNext, prev,disablePrev}) =>{
    // if(noOfContentsDisplayed === 0) return ""
    return (
        <div style={{display:"flex",justifyContent:"space-between", width:"100px", margin:"0 auto"}}>
            <Button disabled={disablePrev}  icon>
                <Icon name='left arrow' />
            </Button>
            <Button disabled icon>
                {page}
            </Button>
            <Button disabled={disableNext} icon>
                <Icon name='right arrow' />
            </Button>
        </div>
    )
}

export default PaginationButtons;