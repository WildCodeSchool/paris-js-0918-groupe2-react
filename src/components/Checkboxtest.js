import React from 'react';

class Checkboxtest extends Component {
    render (){
        return (
            <form class="pa4">
                <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
                    <label for="spacejam" class="lh-copy">Space Jam</label>
                </div>
                <div class="flex items-center mb2">
                    <input class="mr2" type="checkbox" id="airbud" value="airbud" />
                    <label for="airbud" class="lh-copy">Air Bud</label>
                </div>
            </form >
        );
    }
}
