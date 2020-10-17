import React, {Component} from 'react';

import { Container, Button, Link } from 'react-floating-action-button';
// import './fub.css';

export default function Fub()  {
    return (
        <Container>
        <Link href="#"
            tooltip="Create note link"
            icon="fa fa-sticky-note" />
        <Link href="#"
            tooltip="Add user link"
            icon="fa fa-user-plus" />
            
        <Button
            tooltip="The big plus button!"
            icon="fa fa-plus"
            rotate={true}
            onClick={() => alert('FAB Rocks!')} />
    </Container>
    );
  
}