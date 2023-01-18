# AnatomicalStructuresApp

This project is deployed on github pages on the url: [Anatomical Structures](https://anbadrin.github.io/anatomical-structures-app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
The application is deployed on Github pages and can be viewed there.

## Approach

The task was to fetch Anatomical data and id from the API `https://mmpyikxkcp.us-east-2.awsapprunner.com/v2/1NMfu1bEGNFcTYTFT-jCao_lSbFD8n0ti630iIpRj-hw/949267305` and use that id as a parameter to fetch details about Anatomical structures from the API `https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/(id)` where (id) is replaced by the parameter.

#### Step 1:

Created models that will hold the required data in a specified structure. In this task, the models are interfaces like Row, Structure, data, info, Terms, Annotation, DialogData. These interfaces act as return types for the responses from the API's and help to get the structure of data that we want to work with.

#### Step 2:

Created a service that will fetch the data from the specified API's and pass this data to the components for rendering using dependency injection. In this task, the service includes 2 methods:- 
1. To fetch data from the API to get name and id of the anatomical structure
2. To fetch data from the API to get information about the selected anatomical structure

#### Step 3:

Created component for the landing page to render the name and id of the anatomical structures by consuming the data from the service.

#### Step 4:

Created a modal component using Angular Material to display the information about the anatomical structure by consuming the data from the service dependency.

#### Step 5:

Created the HTML and CSS files to render the UI for the landing page and the Angular Material modal.

#### Step 6:

Handled error messages for id and other minor error handling. When id is not present, the name is not clickable and the cursor is disabled.

### Note 
The ngxs state management is not used as there was no scope of data flow within the application that will require managing global states.

## Outputs

### Screen 1 - Landing page for name and id of anatomical structure

<img width="1440" alt="LandingPage" src="https://user-images.githubusercontent.com/97862753/213291759-04bac253-44b9-4577-a36a-a45ebdcdd389.png">


### Screen 2 - Modal for Anatomical Structure information

<img width="930" alt="Modal" src="https://user-images.githubusercontent.com/97862753/213292015-9b14a472-c79e-4a1b-83ce-7a8f79925278.png">


### Screen 3 - Id not present message

<img width="717" alt="IdNotFound" src="https://user-images.githubusercontent.com/97862753/213292222-5a16ba8c-c59b-44b2-a072-14748a566db3.png">




