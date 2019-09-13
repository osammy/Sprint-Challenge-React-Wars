import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const PaginationButtons = ({noOfContentsDisplayed,page, next,disableNext, prev,disablePrev}) =>{
    // if(noOfContentsDisplayed === 0) return ""
    return (
        <div class="pagination-btns">
            <Button onClick={prev}  disabled={disablePrev}  icon>
                <Icon name='left arrow' />
            </Button>
            <Button color="orange" disabled icon>
                {page}
            </Button>
            <Button onClick={next} disabled={disableNext} icon>
                <Icon name='right arrow' />
            </Button>
        </div>
    )
}

export default PaginationButtons;