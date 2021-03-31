import React from 'react';

function Loading(){
    return (
        <div className="w-full min-h-screen h-full absolute block top-0 left-0 bg-white opacity-75 z-50">
            <span className="opacity-75 top-1/3 my-0 mx-auto block relative w-0 h-0">
                <svg className="animate-spin h-24 w-24" xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 497 497" ><g><circle cx={98} cy={376} fill="#909ba6" r={53} /><circle cx={439} cy={336} fill="#c8d2dc" r={46} /><circle cx={397} cy={112} fill="#e9edf1" r={38} /><ellipse cx="56.245" cy="244.754" fill="#7e8b96" rx="56.245" ry="54.874" /><ellipse cx="217.821" cy="447.175" fill="#a2abb8" rx="51.132" ry="49.825" /><ellipse cx="349.229" cy="427.873" fill="#b9c3cd" rx="48.575" ry="47.297" /><ellipse cx="117.092" cy="114.794" fill="#5f6c75" rx="58.801" ry="57.397" /><ellipse cx="453.538" cy="216.477" fill="#dce6eb" rx="43.462" ry="42.656" /><circle cx={263} cy={62} fill="#4e5a61" r={62} /></g></svg>
            </span>
        </div>
    )
}

export default Loading;