import React from 'react';
import Typist from 'react-typist';
import Particles from 'react-tsparticles';
import Navbar from '../Navbar/Navbar';
import 'react-typist/dist/Typist.css';
import './home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Particles id="tsParticles"
                options= {{
                    "fps_limit":60,
                    "interactivity":{
                       "detectsOn":"canvas",
                       "events":{
                          "onClick":{
                             "enable":true,
                             "mode":"push"
                          },
                          "onHover":{
                             "enable":true,
                             "mode":"repulse"
                          },
                          "resize":true
                       },
                       "modes":{
                          "push":{
                             "particles_nb":4
                          },
                          "repulse":{
                             "distance":200,
                             "duration":0.4
                          }
                       }
                    },
                    "particles":{
                       "color":{
                          "value":"#000000"
                       },
                       "links":{
                          "color":"#000000",
                          "distance":150,
                          "enable":true,
                          "opacity":0.4,
                          "width":1
                       },
                       "move":{
                          "bounce":false,
                          "direction":"none",
                          "enable":true,
                          "outMode":"out",
                          "random":false,
                          "speed":2,
                          "straight":false
                       },
                       "number":{
                          "density":{
                             "enable":true,
                             "area":800
                          },
                          "value":80
                       },
                       "opacity":{
                          "value":0.5
                       },
                       "shape":{
                          "type":"circle"
                       },
                       "size":{
                          "random":true,
                          "value":5
                       }
                    },
                    "detectRetina":true
                 }} />
            
            <div className="container d-flex align-items-center justify-content-center fullscreen">
                <div className="hvcenter f-5rem brand">
                    <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>
                        <span>
                            WebDesign
                            <Typist.Backspace count={5} delay={300} />
                            evelopment
                            <Typist.Backspace count={10} delay={300} />
                            eployment
                            <Typist.Backspace count={10} delay={300}/>
                            Weave
                        </span>
                    </Typist>
                    
                </div>
            </div>
        </div>
        
    )
}