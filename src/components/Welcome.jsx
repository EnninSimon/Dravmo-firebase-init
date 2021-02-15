import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';


function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
        <Alert show={show} variant="success" style={{borderRadius:"0px"}}>
          <Alert.Heading>Welcome to Dravmo</Alert.Heading>
          <p>
            Dravmo is a project-based web-app to help constructors or real-estate owners to post their new, ongoing, and completed projects online.
            You cannot upload your image in the form at the moment(<b>It will cause erros when editing the form</b>). Our team is currently working on that issue. We hope to solve it soon. Thank you!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Noted!
          </Button>
          </div>
        </Alert>
    </>
  );
}


const Welcome = () => {
  return (
    <div>
      <AlertDismissible />
    </div>
  );
}

export default Welcome;

