# AnatomicalStructuresApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
The application is deployed on Github pages and can be viewed there.

## Approach

The task was to fetch Anatomical data and id from the API https://mmpyikxkcp.us-east-2.awsapprunner.com/v2/1NMfu1bEGNFcTYTFT-jCao_lSbFD8n0ti630iIpRj-hw/949267305 and use that id as a parameter to fetch details about Anatomical structures from the API https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/(id) where (id) is replaced by the parameter.

#### Step 1:

Created models that will hold the required data in a specified structure.

#### Step 2:

Created a service that will fetch the data from the specified API's and pass this data to the components for rendering using dependency injection.

#### Step 3:

Created component for the landing page to render the name and id of the anatomical structures by consuming the data from the service.

#### Step 4:

Created a modal component using Angular Material to display the information about the anatomical structure by consuming the data from the service dependency.

#### Step 5:

Created the HTML and CSS files to render the UI for the landing page and the Angular Material modal.

Note: The ngxs state management is not used as there was no scope of data flow within the application that will require managing global states.

