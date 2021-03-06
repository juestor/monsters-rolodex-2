import React from "react";
import './card-list.styles.css';

import { Card } from '../card/card.component';

export const CardList = (props) => (
    <div class="card-list">    
        {
            props.monsters.map(monster => 
            <Card key={ monster.id } monster={monster}/>
            )
        }
    </div>
);