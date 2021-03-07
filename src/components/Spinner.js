import React from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'


function Spinner() {
    return (
        <Dimmer active>
            <Loader size='large' />
        </Dimmer>
    )
}

export default Spinner
