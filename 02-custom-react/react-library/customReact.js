function customRender(reactElement, container){

    //! 
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);

    //? why this code isn't good?
    // agar yaha pe h1 tag ya p tag ya kuchh or extra aa jata toh hard code krna padta 

    //# ======================================================

    //! version 2 of the code 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props ){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement)

} 


// this is what we get in react
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : "click me to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)
                                               