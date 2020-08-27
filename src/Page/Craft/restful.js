import React from 'react';
import Article from '../../Component/Article';
import Markdown from 'markdown-to-jsx';
import { render } from 'react-dom';

const restful = (props) => (
    <div className="Craft__container">
        <Article>
        <h2> REST API, HTTP Methods, and Postman </h2>
        <h3> Introduction </h3>
        <h4> REST API </h4> 
        <p> REST API is an acronym for REpresentational State Transfer. It is simply a style for how API should be constructed and how data is transmitted. </p>
        <p> Here are the six guiding principles of REST from https://restfulapi.net/: </p>
        <ol> 
            <li>
            <b>Client-server</b> – By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across moltiple platforms and improve scalability by simplifying the server components.
            </li>
            <li>
            <b>Stateless</b> – Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
            </li>
            <li>
            <b>Cacheable</b> – Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.
            </li>
            <li>
            <b>Uniform interface</b> – By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state.
            </li>
            <li>
            <b>Layered system</b> – The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.
            </li>
            <li>
            <b>Code on demand</b> (optional) – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.
            </li>
        </ol>
        <p> A server application that offers a REST API is also called a RESTful server. </p>
        </Article>
    </div>
)

export default restful;