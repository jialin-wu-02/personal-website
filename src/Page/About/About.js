import React from 'react';
import Article from '../../Component/Article';

const About = (props) => (
    <div>
        <Article>
            <p> [Notice: Rabbit holes are not connected yet. This cabinet is still under development.] </p>
            <p> <b> This is a cabinet of various shapes of thoughts. </b> </p>
            <p> These are the thoughts that were picked up accidentally throughout my daily life. They are like cobblestones, 
                which I hope would pave the road of mine or even someone else's.
            </p>
            <p> Ever since I was small, I love to open a wiki page and follow the <a className="link" target="_blank" href="https://en.wikipedia.org/wiki/Wiki_rabbit_hole"> wiki rabbit hole</a>. 
                This is the primary way of me exploring the world around me and feed my curiosity. 
            </p>
            <p>
                I want to provide my readers a similar experience, and thus I decide to build this cabinet full of "portals"(the greyish hyperlink) connected 
                to various other thoughts of mine and also external references. 
            </p>
            <p>
                Now, welcome, have fun hopping into different rabbit holes and picking up a few cobblestones along the way.
            </p>
            <br />
            <p> A little something about <a className="link" href="#"> me</a>. My name is Alex, a Junior student at <a className="link" href="#">University of California, Berkeley</a> studying <a className="link" href="#"> Computer Science</a>.
                I love <a className="link" href="#"> human-computer interaction</a> and <a className="link" href="#"> full stack development</a>. 
                I play chess and hearthstone in my spare time.
            </p>
        </Article>
    </div>
)

export default About;